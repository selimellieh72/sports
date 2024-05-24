from flask import Flask, jsonify, request
from flask_cors import CORS
import pymysql
import datetime
import json
app = Flask(__name__)
CORS(app)

def get_db():
    return pymysql.connect(host='localhost',
                           user='root',
                           password='Selim2015',
                           db='sportsdblocal',
                           cursorclass=pymysql.cursors.DictCursor)

@app.route('/')
def index():

    return jsonify({'message': 'Hello, World!'})
@app.route('/date')
@app.route('/date/<date>')
def date(date = None):
    
    conn = get_db()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM dates WHERE `Date` = %s", (date if date 
    else  datetime.datetime.now().strftime('%Y-%m-%d')))
    date = cursor.fetchall()[0]
    date['Combinations'] = json.loads(date['Combinations'])

    
    cursor.close()
    conn.close()
    return jsonify(date)

@app.route('/players')
@app.route('/players/<date>')
def players(date=None):
    conn = get_db()
    cursor = conn.cursor()

    date_value = date if date else datetime.datetime.now().strftime('%Y-%m-%d')
    page = request.args.get('n', default = 1, type = int)

    cursor.execute('''
           WITH RankedPlayers AS (
            SELECT
                p.*,
                t.unique_players,
                o.occurrence,
 
                DENSE_RANK() OVER (ORDER BY t.unique_players DESC, p.team, o.occurrence DESC, p.player_id) as player_rank
            FROM playerData p
            INNER JOIN (
                SELECT team, COUNT(DISTINCT player_id) AS unique_players
                FROM playerData
                WHERE `Date` = %s
                GROUP BY team
            ) t ON p.team = t.team
            INNER JOIN (
                SELECT player_id, COUNT(*) AS occurrence
                FROM playerData
                WHERE `Date` = %s
                GROUP BY player_id
            ) o ON p.player_id = o.player_id
            WHERE p.`Date` = %s
        )
        SELECT *
        FROM RankedPlayers as r
        INNER JOIN (
            SELECT player_id
            FROM RankedPlayers
            GROUP BY player_id
            ORDER BY player_rank
            LIMIT 10 OFFSET %s
        ) as r2
        ON r.player_id = r2.player_id
        ORDER BY unique_players DESC, team, occurrence DESC, r.player_id;

            
                   ''', ( date_value, date_value, date_value, page))
    players = cursor.fetchall()

    cursor.close()
    conn.close()
    return jsonify(players)

if __name__ == '__main__':
    app.run(debug=True)