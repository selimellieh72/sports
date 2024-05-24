// we can use jquery

let date = '2024-03-17';

function getDate(date) {
    return $.ajax({
        url: `http://localhost:5000/date/${date}`,
        method: 'GET'
    });
}

function getPlayerData(date, n) {
    return $.ajax({
        url: `http://localhost:5000/players/${date}?n=${n}`,
        method: 'GET'
    });
}

function fillPlayerData(playerData) {
        let i = 0;
        while (i < playerData.length) {

        $('.players-container').append(
            `
            <div class="w-layout-grid grid-copy highlight-grid">
            <div
              id="w-node-ee34f9bb-6e4f-8801-cf10-5999acd97d9d-e603a0bb"
              class="div-block-2"
            >
              <img
                src=""
                loading="lazy"
                id="w-node-ee34f9bb-6e4f-8801-cf10-5999acd97d9e-e603a0bb"
                sizes="(max-width: 479px) 100vw, (max-width: 618px) 97vw, 600px"
                alt=""
              
                class="image-2 player-image"
              />
              <div class="legend">
                <div class="legend-text">Player Image</div>
              </div>
            </div>
            
          </div>
          <div class="w-layout-hflex flex-block">
            <div class="div-block-2-copy">
              <div class="legend">
                <div class="legend-text">Player Details</div>
              </div>
              <div class="text-block-7">
                • <strong>Height</strong>: <span class="height-text"></span> •<strong>
                  Weight</strong
                >: <span class="weight-text"></span><br />• <strong>Position</strong>: <span class="position-text"></span>
                <strong>Class</strong>: <span class="class-text"></span><br />• <strong>Hometown</strong>:
                <span class="hometown-text"></span><br />• <strong>MPG</strong>: <span class="mpg-text"></span> •
                <strong>PPG</strong>: <span class="ppg-text"></span><br />•
                <strong>Team Record</strong>: <span class="teamrecord-text"></span>
              </div>
            </div>
            <div
              id="w-node-b7c05dcb-8c9b-3963-a453-37ddfaf2d1f6-e603a0bb"
              class="div-block-2 width-auto"
            >
              <div class="text-block-6">
                <span class="text-span-3">Monday Jan 1999</span>
              </div>
              <div
                id="w-node-b7c05dcb-8c9b-3963-a453-37ddfaf2d1fa-e603a0bb"
                class="w-layout-layout quick-stack-copy wf-layout-layout"
              >
                <div
                  id="w-node-b7c05dcb-8c9b-3963-a453-37ddfaf2d1fb-e603a0bb"
                  class="w-layout-cell"
                >
                  <div class="number">2 8 8 8</div>
                </div>
                <div
                  id="w-node-b7c05dcb-8c9b-3963-a453-37ddfaf2d1fe-e603a0bb"
                  class="w-layout-cell"
                >
                  <div class="number">2 8 8 8</div>
                </div>
              </div>
              <div class="legend">
                <div class="legend-text">Date Of Birth</div>
              </div>
            </div>
            <div
              id="w-node-_9bca6149-7d22-4937-6b57-6968668a45e2-e603a0bb"
              class="div-block-2 width-auto"
            >
              <div class="text-block-6">
                <span class="text-span-3-copy">125</span>
              </div>
              <div
                id="w-node-_9bca6149-7d22-4937-6b57-6968668a45e6-e603a0bb"
                class="w-layout-layout quick-stack wf-layout-layout"
              >
                <div
                  id="w-node-_9bca6149-7d22-4937-6b57-6968668a45e7-e603a0bb"
                  class="w-layout-cell"
                >
                  <div class="number">28</div>
                </div>
                <div
                  id="w-node-_9bca6149-7d22-4937-6b57-6968668a45ea-e603a0bb"
                  class="w-layout-cell"
                >
                  <div class="number">28</div>
                </div>
                <div
                  id="w-node-_9bca6149-7d22-4937-6b57-6968668a45ed-e603a0bb"
                  class="w-layout-cell"
                >
                  <div class="number">28</div>
                </div>
                <div
                  id="w-node-_9bca6149-7d22-4937-6b57-6968668a45f0-e603a0bb"
                  class="w-layout-cell"
                >
                  <div class="number">28</div>
                </div>
              </div>
              <div class="legend">
                <div class="legend-text">Days To Birth</div>
              </div>
            </div>
            <div
              id="w-node-b05d36e2-da05-6871-c45d-f2fbca257c40-e603a0bb"
              class="div-block-2 width-auto"
            >
              <div class="text-block-6">
                <span class="text-span-3-copy">4234234</span>
              </div>
              <div
                id="w-node-b05d36e2-da05-6871-c45d-f2fbca257c44-e603a0bb"
                class="w-layout-layout quick-stack wf-layout-layout"
              >
                <div
                  id="w-node-b05d36e2-da05-6871-c45d-f2fbca257c45-e603a0bb"
                  class="w-layout-cell"
                >
                  <div class="number">28</div>
                </div>
                <div
                  id="w-node-b05d36e2-da05-6871-c45d-f2fbca257c48-e603a0bb"
                  class="w-layout-cell"
                >
                  <div class="number">28</div>
                </div>
                <div
                  id="w-node-b05d36e2-da05-6871-c45d-f2fbca257c4b-e603a0bb"
                  class="w-layout-cell"
                >
                  <div class="number">28</div>
                </div>
                <div
                  id="w-node-b05d36e2-da05-6871-c45d-f2fbca257c4e-e603a0bb"
                  class="w-layout-cell"
                >
                  <div class="number">28</div>
                </div>
              </div>
              <div class="legend">
                <div class="legend-text">Days Since Birth</div>
              </div>
            </div>
          </div>
          <div
            id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab32-e603a0bb"
            class="w-layout-layout quick-stack-3 wf-layout-layout"
          >
            <div
              id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab33-e603a0bb"
              class="w-layout-cell"
            >
              <div
                id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab34-e603a0bb"
                class="div-block-2"
              >
                <div class="text-block-6">
                  <span class="text-span-3 playerfirstname-text"></span>
                </div>
                <div
                  id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab38-e603a0bb"
                  class="w-layout-layout quick-stack wf-layout-layout"
                >
                  <div
                    id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab39-e603a0bb"
                    class="w-layout-cell"
                  >
                    <div class="number playerfirstname-ord"></div>
                  </div>
                  <div
                    id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab3c-e603a0bb"
                    class="w-layout-cell"
                  >
                    <div class="number playerfirstname-red"></div>
                  </div>
                  <div
                    id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab3f-e603a0bb"
                    class="w-layout-cell"
                  >
                    <div class="number playerfirstname-rev-ord"></div>
                  </div>
                  <div
                    id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab42-e603a0bb"
                    class="w-layout-cell"
                  >
                    <div class="number playerfirstname-rev-red"></div>
                  </div>
                </div>
                <div class="legend">
                  <div class="legend-text">Player First Name</div>
                </div>
              </div>
            </div>
            <div
              id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab48-e603a0bb"
              class="w-layout-cell"
            >
              <div
                id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab49-e603a0bb"
                class="div-block-2"
              >
                <div class="text-block-6">
                  <span class="text-span-3 playersecondname-text"></span>
                </div>
                <div
                  id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab4d-e603a0bb"
                  class="w-layout-layout quick-stack wf-layout-layout"
                >
                  <div
                    id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab4e-e603a0bb"
                    class="w-layout-cell"
                  >
                    <div class="number playerlastname-ord"></div>
                  </div>
                  <div
                    id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab51-e603a0bb"
                    class="w-layout-cell"
                  >
                    <div class="number playerlastname-red"></div>
                  </div>
                  <div
                    id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab54-e603a0bb"
                    class="w-layout-cell"
                  >
                    <div class="number playerlastname-rev-ord"></div>
                  </div>
                  <div
                    id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab57-e603a0bb"
                    class="w-layout-cell"
                  >
                    <div class="number playerlastname-rev-red"></div>
                  </div>
                </div>
                <div class="legend">
                  <div class="legend-text">Player Second Name</div>
                </div>
              </div>
            </div>
            <div
              id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab5d-e603a0bb"
              class="w-layout-cell"
            >
              <div
                id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab5e-e603a0bb"
                class="div-block-2"
              >
                <div class="text-block-6">
                  <span class="text-span-3-copy playerfullname-text"></span>
                </div>
                <div
                  id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab62-e603a0bb"
                  class="w-layout-layout quick-stack wf-layout-layout"
                >
                  <div
                    id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab63-e603a0bb"
                    class="w-layout-cell"
                  >
                    <div class="number playerfullname-ord"></div>
                  </div>
                  <div
                    id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab66-e603a0bb"
                    class="w-layout-cell"
                  >
                    <div class="number playerfullname-red"></div>
                  </div>
                  <div
                    id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab69-e603a0bb"
                    class="w-layout-cell"
                  >
                    <div class="number playerfullname-rev-ord"></div>
                  </div>
                  <div
                    id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab6c-e603a0bb"
                    class="w-layout-cell"
                  >
                    <div class="number playerfullname-rev-red"></div>
                  </div>
                </div>
                <div class="legend">
                  <div class="legend-text">Player Full Name</div>
                </div>
              </div>
            </div>
            <div
              id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab72-e603a0bb"
              class="w-layout-cell"
            >
              <div
                id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab73-e603a0bb"
                class="div-block-2"
              >
                <div class="text-block-6">
                  <span class="text-span-3-copy state-text"></span>
                </div>
                <div
                  id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab77-e603a0bb"
                  class="w-layout-layout quick-stack wf-layout-layout"
                >
                  <div
                    id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab78-e603a0bb"
                    class="w-layout-cell"
                  >
                    <div class="number state-ord"></div>
                  </div>
                  <div
                    id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab7b-e603a0bb"
                    class="w-layout-cell"
                  >
                    <div class="number state-red"></div>
                  </div>
                  <div
                    id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab7e-e603a0bb"
                    class="w-layout-cell"
                  >
                    <div class="number state-rev-ord"></div>
                  </div>
                  <div
                    id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab81-e603a0bb"
                    class="w-layout-cell"
                  >
                    <div class="number state-rev-red"></div>
                  </div>
                </div>
                <div class="legend"><div class="legend-text">State</div></div>
              </div>
            </div>
            <div
              id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab87-e603a0bb"
              class="w-layout-cell"
            >
              <div
                id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab88-e603a0bb"
                class="div-block-2"
              >
                <div class="text-block-6">
                  <span class="text-span-3-copy city-text"></span>
                </div>
                <div
                  id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab8c-e603a0bb"
                  class="w-layout-layout quick-stack wf-layout-layout"
                >
                  <div
                    id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab8d-e603a0bb"
                    class="w-layout-cell"
                  >
                    <div class="number city-ord"></div>
                  </div>
                  <div
                    id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab90-e603a0bb"
                    class="w-layout-cell"
                  >
                    <div class="number city-red"></div>
                  </div>
                  <div
                    id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab93-e603a0bb"
                    class="w-layout-cell"
                  >
                    <div class="number city-rev-ord"></div>
                  </div>
                  <div
                    id="w-node-_321e49ee-cd2d-9d20-457d-8b43e63bab96-e603a0bb"
                    class="w-layout-cell"
                  >
                    <div class="number city-rev-red"></div>
                  </div>
                </div>
                <div class="legend"><div class="legend-text">City</div></div>
              </div>
            </div>
          </div>
          <div id="w-node-_5420378c-2061-6c18-356a-b05d0824fc6d-e603a0bb" class="w-layout-layout quick-stack-3 wf-layout-layout"><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fc6e-e603a0bb" class="w-layout-cell"><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fc6f-e603a0bb" class="div-block-2"><div class="text-block-6"><span class="text-span-3">#22</span></div><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fc73-e603a0bb" class="w-layout-layout quick-stack wf-layout-layout"><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fc74-e603a0bb" class="w-layout-cell"><div class="number">28</div></div><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fc77-e603a0bb" class="w-layout-cell"><div class="number">28</div></div><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fc7a-e603a0bb" class="w-layout-cell"><div class="number">28</div></div><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fc7d-e603a0bb" class="w-layout-cell"><div class="number">28</div></div></div><div class="legend"><div class="legend-text">Number</div></div></div></div><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fc83-e603a0bb" class="w-layout-cell"><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fc84-e603a0bb" class="div-block-2"><div class="text-block-6"><span class="text-span-3">Alabama Crimson Tide</span></div><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fc88-e603a0bb" class="w-layout-layout quick-stack wf-layout-layout"><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fc89-e603a0bb" class="w-layout-cell"><div class="number">28</div></div><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fc8c-e603a0bb" class="w-layout-cell"><div class="number">28</div></div><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fc8f-e603a0bb" class="w-layout-cell"><div class="number">28</div></div><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fc92-e603a0bb" class="w-layout-cell"><div class="number">28</div></div></div><div class="legend"><div class="legend-text">Team Name</div></div></div></div><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fc98-e603a0bb" class="w-layout-cell"><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fc99-e603a0bb" class="div-block-2"><div class="text-block-6"><span class="text-span-3-copy">Alabama</span></div><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fc9d-e603a0bb" class="w-layout-layout quick-stack wf-layout-layout"><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fc9e-e603a0bb" class="w-layout-cell"><div class="number">28</div></div><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fca1-e603a0bb" class="w-layout-cell"><div class="number">28</div></div><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fca4-e603a0bb" class="w-layout-cell"><div class="number">28</div></div><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fca7-e603a0bb" class="w-layout-cell"><div class="number">28</div></div></div><div class="legend"><div class="legend-text">Team First Name</div></div></div></div><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fcad-e603a0bb" class="w-layout-cell"><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fcae-e603a0bb" class="div-block-2"><div class="text-block-6"><span class="text-span-3-copy">Crimson Tide</span></div><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fcb2-e603a0bb" class="w-layout-layout quick-stack wf-layout-layout"><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fcb3-e603a0bb" class="w-layout-cell"><div class="number">28</div></div><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fcb6-e603a0bb" class="w-layout-cell"><div class="number">28</div></div><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fcb9-e603a0bb" class="w-layout-cell"><div class="number">28</div></div><div id="w-node-_5420378c-2061-6c18-356a-b05d0824fcbc-e603a0bb" class="w-layout-cell"><div class="number">28</div></div></div><div class="legend"><div class="legend-text">Team Last Name</div></div></div></div></div><div class="div-block-6"></div>
       
        </div>
            `
        )
        $('.playerfirstname-text:last').text(playerData[i].name.split(' ')[0]);
        $('.playersecondname-text:last').text(playerData[i].name.split(' ')[1]);
        $('.playerfullname-text:last').text(playerData[i].name);
        $('.state-text:last').text(playerData[i].state);
        $('.city-text:last').text(playerData[i].city);

        $('.playerfirstname-ord:last').text(playerData[i].firstnameord);
        $('.playerfirstname-red:last').text(playerData[i].firstnamered);
        $('.playerfirstname-rev-ord:last').text(playerData[i].firstnamerevord);
        $('.playerfirstname-rev-red:last').text(playerData[i].firstnamerevred);

        $('.playerlastname-ord:last').text(playerData[i].lastnameord);
        $('.playerlastname-red:last').text(playerData[i].lastnamered);
        $('.playerlastname-rev-ord:last').text(playerData[i].lastnamerevord);
        $('.playerlastname-rev-red:last').text(playerData[i].lastnamerevred);

        $('.playerfullname-ord:last').text(playerData[i].nameord);
        $('.playerfullname-red:last').text(playerData[i].namered);
        $('.playerfullname-rev-ord:last').text(playerData[i].namerevord);
        $('.playerfullname-rev-red:last').text(playerData[i].namerevord);

        $('.state-ord:last').text(playerData[i].stateord);
        $('.state-red:last').text(playerData[i].statered);
        $('.state-rev-ord:last').text(playerData[i].staterevord);
        $('.state-rev-red:last').text(playerData[i].staterevred);

        $('.city-ord:last').text(playerData[i].cityord);
        $('.city-red:last').text(playerData[i].cityred);
        $('.city-rev-ord:last').text(playerData[i].cityrevord);
        $('.city-rev-red:last').text(playerData[i].cityrevred);

        $('.player-image:last').attr('src', playerData[i].player_image);

        $('.height-text:last').text(playerData[i].height);
        $('.weight-text:last').text(playerData[i].weight);
        $('.position-text:last').text(playerData[i].position);
        $('.class-text:last').text(playerData[i].class);
        $('.hometown-text:last').text(playerData[i].hometown);
        $('.mpg-text:last').text(Math.round(playerData[i].mpg * 10)/10);
        $('.ppg-text:last').text(Math.round(playerData[i].ppg * 10)/10);
        $('.teamrecord-text:last').text(playerData[i].teamrecord);


        // each player has a number
        // now assume i can vary, but for simplicity now let i = 0 and design for variability
        
        // playerData[i] has a number
        // start at playerData[i] and while the number is the same as playerData[i]...
        let j = i;
        console.log(j, playerData[j])
        while (j < playerData.length &&  playerData[j].number === playerData[i].number) {
            const div = $('<div>').addClass('div-block-2');
            const info = $('<div>').addClass('text-block-6');
            const info_text = $('<span>').addClass('text-span-3').text(playerData[j].Value);
            info.append(info_text);
            div.append(info);
            const reason_div = $('<div>').addClass('').text(playerData[j].Description);
            div.append(reason_div);
            const legend_div = $('<div>').addClass('legend');
            const legend_text = $('<div>').addClass('legend-text').text(playerData[j].Column);
            legend_div.append(legend_text); 
            div.append(legend_div);
            $('.highlight-grid:last').append(div);
            j++;
        }
        i = j;
        
    }
}

function fillBody() {
  $.when(getDate(date ), getPlayerData(date, 1)).done(function(dateResponse, playerResponse) {
    const dateData = dateResponse[0];
    const playerData = playerResponse[0];
    
    
    $('.date-text').text(dateData.Date);
 
    $('.day-text').text(dateData.DayOfWeek);
    $('.day-ord').text(dateData.DayOrdinal);
    $('.day-red').text(dateData.DayReduction);
    $('.day-rev-ord').text(dateData.DayReverseOrdinal);
    $('.day-rev-red').text(dateData.DayReverseReductionOrdinal);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    $('.month-text').text(months[dateData.Month - 1]);
    $('.month-ord').text(dateData.MonthOrdinal);
    $('.month-rev').text(dateData.MonthReduction);
    $('.month-rev-ord').text(dateData.MonthReverseOrdinal);
    $('.month-rev-red').text(dateData.MonthReverseReductionOrdinal);
    $('.dayofyear-text').text(dateData.DayOfYear)
    $('.daysleftinyear-text').text(dateData.DaysLeftInYear)
    const regex = /(\d+)\[(\d+)\]/g;
    let match;

    // Use the regex to extract and loop over matches
    while ((match = regex.exec(dateData.List)) !== null) {
        const key = match[1];
        const value = match[2];

        const tr = $('<tr>').addClass('table_row');
        const td1 = $('<td>').addClass('table_cell smaller').text(key);
        const td2 = $('<td>').addClass('table_cell smaller').text(value);
        tr.append(td1);
        tr.append(td2);
        $('.possible-tbody').append(tr);
    }
    // now for each combination of dateData.Combinations
    $.each(dateData.Combinations, function(index, combination) {
        const tr = $('<tr>').addClass('table_row');
        const td1 = $('<td>').addClass('table_cell smaller').text(combination.Combination.replace(/\.\./g, '+'));
        const td2 = $('<td>').addClass('table_cell smaller').text(combination.Value);
        const td3 = $('<td>').addClass('table_cell smaller').text(combination.Gematria);
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        $('.combinations-tbody').append(tr);
    });

    $('.possibilities-text').text(dateData.ListOfNumbers);
    
    fillPlayerData(playerData);
    $('.button-2.page').click(function() {
        let page = $(this).text();
        try {
            page = parseInt(page);
            if (page === playerPage) {
                return;
            }
            playerPage = page;
            $('.players-container').empty();
            $(this).addClass('page-selected');
            $(this).siblings().removeClass('page-selected');
            getPlayerData(page).done(function(playerData) {
                fillPlayerData(playerData);
                // scroll to #player-display
                $('html, body').animate({
                    scrollTop: $('#player-display').offset().top
                }, 1000);
            });


        } catch (e) {
            return;
        }
    });
    $('body').show();




});
}

let playerPage = 1;

// on load, get the date

$(document).ready(function() {
    fillBody();
   // date-search on enter
   $('.date-search').keypress(function(e) {

    if (e.which === 13) {
        input_date = $(this).val();
       
        if (input_date.match(/^\d{4}-\d{2}-\d{2}$/)) {
            date = input_date;
            $('body').hide();
            fillBody();

        }
    }
});
});