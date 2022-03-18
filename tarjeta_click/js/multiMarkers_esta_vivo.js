var dict = [{'1e7c0797-be4e-4e62-8e14-c5156866545f': {'fullname': 'Rodrigo Mato', 'email': 'rodrigomato.rm@gmail.com', 'phone': '098236300', 'user_position': 'Software Engineer', 'web_page': 'https://google.com.uy', 'linkedin': 'https://www.linkedin.com/in/rodrigo-mato-pla/', 'github': 'https://github.com/RodrigoMato00', 'instagram': 'https://www.instagram.com/rodrigomato00/', 'about_you': 'soy el rodri mato cuidado que te mato ', 'facebook': '', 'twitter': '', 'behance': '', 'slack': '', 'marker': 1, 'button_color': '#ff0004', 'icon_color': '#FFFFFF'}}, {'3c25fd3a-993c-42bc-96ca-60645e948eb8': {'fullname': 'Hugo', 'email': 'h@h', 'phone': '098098098', 'user_position': 'Software Engineer', 'web_page': 'https://google.com', 'linkedin': 'https://www.linkedin.com/in/rodrigo-mato-pla/', 'github': 'https://github.com/RodrigoMato00', 'instagram': 'https://www.instagram.com/rodrigomato00/', 'about_you': '', 'facebook': '', 'twitter': '', 'behance': '', 'slack': '', 'marker': 2, 'button_color': '#8aff75', 'icon_color': '#000000'}}, {'5dd37e58-b951-4ba2-a61e-d0a03415b3cf': {'fullname': 'Alicia Pla', 'email': 'a@a', 'phone': '098765432', 'marker': 3}}];

var markersURLArray = [];
var markersNameArray = [];


AFRAME.registerComponent('markers_start', {
  init: function() {
      console.log('Add markers to the scene');

      var sceneEl = document.querySelector('a-scene');

      for (var i = 1; i < 19; i++) {
          var url = "../files_marker_patt/pattern-4x4_1000-" + i + ".patt";
          markersURLArray.push(url);
          markersNameArray.push('Marker_' + i);
      }

      for (var k = 0; k < 18; k++) {
              for (var j = 0; j < dict.length; j++) {
                  for (var key in dict[j]) {

                      if (dict[j][key].marker == k + 1) {

                          var icon = dict[j][key].button_color;

                          //Create a marker
                          var markerEl = document.createElement('a-marker');

                          markerEl.setAttribute('type', 'pattern');
                          markerEl.setAttribute('url', markersURLArray[k]);
                          markerEl.setAttribute('id', );
                          markerEl.setAttribute('emitevents', 'true');
                          markerEl.setAttribute('button');
                          markerEl.setAttribute('cursor', 'rayOrigin: mouse');
                          markerEl.object3D.scale.set(0.5, 0.5, 0.5);

                          sceneEl.appendChild(markerEl);

                          //Marker Id text (no borrar)
                          var textEl = document.createElement('a-entity');

                          textEl.setAttribute('id', 'text');
                          textEl.setAttribute('text', { color: 'red', align: 'center', value: markersNameArray[k], width: '5.5' });
                          textEl.object3D.position.set(0, 0.7, 0);
                          textEl.object3D.rotation.set(-90, 0, 0);

                          markerEl.appendChild(textEl);
                        
                          //text name & position support
                          var suport_name_position = document.createElement('a-plane');
                          var color_button = dict[j][key].icon_color;

                          suport_name_position.setAttribute('id', 'text_suport');
                          suport_name_position.setAttribute('width', '2.4');
                          suport_name_position.setAttribute('height', '1.5');
                          suport_name_position.setAttribute('color', color_button);
                          suport_name_position.setAttribute('position', '2.3, 0, 3.65');
                          suport_name_position.setAttribute('rotation', '-90 0 0');
                          suport_name_position.setAttribute('opacity', "0");

                          markerEl.appendChild(suport_name_position);

                          //Name text extractor

                          var text_assets = document.createElement('a-assets');

                          sceneEl.appendChild(text_assets);

                          var text_name = document.createElement('a-mixin');

                          text_name.setAttribute('id', 'text_'+ dict[j][key].marker + 'name');
                          text_name.setAttribute('text', 'align: center; width: 2; font: https://cdn.aframe.io/fonts/Monoid.fnt; value: ' + dict[j][key].fullname);

                          text_assets.appendChild(text_name);



                          //Name text

                          var name_text = document.createElement('a-text');
                          name_text.setAttribute('id', 'name_text');
                          name_text.setAttribute('mixin', 'text_'+ dict[j][key].marker + 'name');
                          name_text.setAttribute('wrap-count', '7');
                          name_text.object3D.position.set(0, 0, 0);
                          name_text.object3D.rotation.set(0, 0, 0);
                          name_text.object3D.height = 1.5;
                          name_text.object3D.width = 2.4;
                          name_text.setAttribute('color', color_button);

                          suport_name_position.appendChild(name_text);

                          //text position extractor

                          var text_position = document.createElement('a-entity');

                          sceneEl.appendChild(text_position);

                          var text_position_extractor = document.createElement('a-mixin');

                          text_position_extractor.setAttribute('id', 'text_0_position_'+ dict[j][key].marker + 'position');
                          text_position_extractor.setAttribute('text', 'align: center; width: 1.5; font: https://cdn.aframe.io/fonts/Monoid.fnt; value:' + dict[j][key].user_position);

                          text_position.appendChild(text_position_extractor);

                          //position text

                          var position_text = document.createElement('a-text');

                          position_text.setAttribute('id', 'user_position');
                          position_text.setAttribute('mixin', 'text_0_position_'+ dict[j][key].marker + 'position');
                          position_text.setAttribute('wrap-count', '20');
                          position_text.setAttribute('color', color_button);
                          position_text.object3D.position.set(0, -0.7, 0);
                          position_text.object3D.rotation.set(0, 0, 0);
                          position_text.object3D.height = 1.5;
                          position_text.object3D.width = 2.4;

                          suport_name_position.appendChild(position_text);

                          //personal text extractor

                          var text_assets = document.createElement('a-assets');

                          sceneEl.appendChild(text_assets);

                          var text_personal = document.createElement('a-mixin');

                          text_personal.setAttribute('id', 'text_' + dict[j][key].marker + '_personal');
                          text_personal.setAttribute('text', 'align: left; width: 5; higth: auto; font: https://cdn.aframe.io/fonts/Aileron-Semibold.fnt; value:'+ dict[j][key].about_you);

                          text_assets.appendChild(text_personal);

                          var text_suport = document.createElement('a-plane');

                          text_suport.setAttribute('id', 'text_suport');
                          text_suport.setAttribute('width', '5.3');
                          text_suport.setAttribute('height', '1');
                          text_suport.setAttribute('color', color_button);
                          text_suport.setAttribute('position', '-2.1 0 1.75');
                          text_suport.setAttribute('rotation', '-90 0 0');
                          text_suport.setAttribute('opacity', "0");

                          markerEl.appendChild(text_suport);

                          var content_text = document.createElement('a-text');

                          content_text.setAttribute('id', 'content_text');
                          content_text.setAttribute('mixin', 'text_' + dict[j][key].marker + '_personal');
                          content_text.setAttribute('wrap-count', '43');
                          content_text.setAttribute('width', '5');
                          content_text.setAttribute('height', '1');
                          content_text.setAttribute('position', '-2.5 0 0');
                          content_text.setAttribute('rotation', '0 0 0');
                          content_text.setAttribute('color', color_button);
                          content_text.setAttribute('transparent', "false");

                          text_suport.appendChild(content_text);

                          if (dict[j][key].icon_color == '#FFFFFF'){

                                  // web_page
                                  var web_page = document.createElement('a-box');

                                  web_page.setAttribute('id', 'push_link');
                                  web_page.setAttribute('class', 'intersectable');
                                  web_page.setAttribute('width', '2.4');
                                  web_page.setAttribute('height', '1');
                                  web_page.setAttribute('depth', '0.01');
                                  web_page.setAttribute('position', '-3.3 0 3.4');
                                  web_page.setAttribute('rotation', '-90 0 0');
                                  web_page.setAttribute('color', icon);
                                  web_page.setAttribute('navigate-on-click', 'url: ' + dict[j][key].web_page);
                                  web_page.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 0; dur: 1000; startEvents: click' );

                                  markerEl.appendChild(web_page);

                                  var web_image = document.createElement('a-image');

                                  web_image.setAttribute('id', 'web_image');
                                  web_image.setAttribute('src', 'resources/models/WEBPAGE_white.png');
                                  web_image.setAttribute('width', '2.4');
                                  web_image.setAttribute('height', '1');
                                  web_image.setAttribute('position', '0 0 0.2');
                                  web_image.setAttribute('rotation', '0 0 0');

                                  web_page.appendChild(web_image);

                                  // linkedin
                                  var linkedin_page = document.createElement('a-box');

                                  linkedin_page.setAttribute('id', 'push_linkedin');
                                  linkedin_page.setAttribute('class', 'intersectable');
                                  linkedin_page.setAttribute('width', '2.4');
                                  linkedin_page.setAttribute('height', '1');
                                  linkedin_page.setAttribute('depth', '0.01');
                                  linkedin_page.setAttribute('position', '-0.7 0 3.4');
                                  linkedin_page.setAttribute('rotation', '-90 0 0');
                                  linkedin_page.setAttribute('color', icon);
                                  linkedin_page.setAttribute('navigate-on-click', 'url:' + dict[j][key].linkedin);
                                  linkedin_page.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 0; dur: 1000; startEvents: click' );


                                  markerEl.appendChild(linkedin_page);

                                  var linkedin_image = document.createElement('a-image');

                                  linkedin_image.setAttribute('id', 'linkedin_image');
                                  linkedin_image.setAttribute('src', 'resources/models/LINKEDIN_white.png');
                                  linkedin_image.setAttribute('width', '2.4');
                                  linkedin_image.setAttribute('height', '1');
                                  linkedin_image.setAttribute('position', '0 0 0.2');
                                  linkedin_image.setAttribute('rotation', '0 0 0');


                                  linkedin_page.appendChild(linkedin_image);

                                  // email
                                  var email_link = document.createElement('a-cylinder');

                                  email_link.setAttribute('id', 'push_email');
                                  email_link.setAttribute('class', 'intersectable');
                                  email_link.setAttribute('radius', '0.51');
                                  email_link.setAttribute('height', '0.01');
                                  email_link.setAttribute('color', icon);
                                  email_link.setAttribute('position', '-2.65 0 4.65');
                                  email_link.setAttribute('rotation', '0 90 0');
                                  email_link.setAttribute('navigate-on-click_mail', 'url: ' +'mailto: '+ dict[j][key].email);
                                  email_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                  markerEl.appendChild(email_link);

                                  var email_image = document.createElement('a-image');

                                  email_image.setAttribute('id', 'push_github_image');
                                  email_image.setAttribute('src', 'resources/models/MAIL_white.png');
                                  email_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                  email_image.setAttribute('position', '0 0.2 0');
                                  email_image.setAttribute('rotation', '90 0 -90');

                                  email_link.appendChild(email_image);

                                  // github
                                  if (dict[j][key].github != ''){

                                    var github_link = document.createElement('a-cylinder');

                                    github_link.setAttribute('id', 'push_github');
                                    github_link.setAttribute('class', 'intersectable');
                                    github_link.setAttribute('radius', '0.51');
                                    github_link.setAttribute('height', '0.01');
                                    github_link.setAttribute('color', icon);
                                    github_link.setAttribute('position', '-1.35 0 4.65');
                                    github_link.setAttribute('rotation', '0 90 0');
                                    github_link.setAttribute('navigate-on-click', 'url: '+dict[j][key].github);
                                    github_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                    markerEl.appendChild(github_link);

                                    var github_image = document.createElement('a-image');

                                    github_image.setAttribute('id', 'push_github_image');
                                    github_image.setAttribute('src', 'resources/models/GITHUB_white.png');
                                    github_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                    github_image.setAttribute('position', '0 0.2 0');
                                    github_image.setAttribute('rotation', '270 0 -90');

                                    github_link.appendChild(github_image);
                                  }

                                  else if (dict[j][key].facebook != ''){

                                    var facebook_link = document.createElement('a-cylinder');

                                    facebook_link.setAttribute('id', 'push_facebook');
                                    facebook_link.setAttribute('class', 'intersectable');
                                    facebook_link.setAttribute('radius', '0.51');
                                    facebook_link.setAttribute('height', '0.01');
                                    facebook_link.setAttribute('color', icon);
                                    facebook_link.setAttribute('position', '-1.35 0 4.65');
                                    facebook_link.setAttribute('rotation', '0 90 0');
                                    facebook_link.setAttribute('navigate-on-click', 'url: '+dict[j][key].facebook);
                                    facebook_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                    markerEl.appendChild(facebook_link);

                                    var facebook_image = document.createElement('a-image');

                                    facebook_image.setAttribute('id', 'push_facebook_image');
                                    facebook_image.setAttribute('src', 'resources/models/FACEBOOK_white.png');
                                    facebook_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                    facebook_image.setAttribute('position', '0 0.2 0');
                                    facebook_image.setAttribute('rotation', '270 0 -90');

                                    facebook_link.appendChild(facebook_image);
                                  }

                                  else if (dict[j][key].behance != ''){

                                    var behance_link = document.createElement('a-cylinder');

                                    behance_link.setAttribute('id', 'push_behance');
                                    behance_link.setAttribute('class', 'intersectable');
                                    behance_link.setAttribute('radius', '0.51');
                                    behance_link.setAttribute('height', '0.01');
                                    behance_link.setAttribute('color', icon);
                                    behance_link.setAttribute('position', '-1.35 0 4.65');
                                    behance_link.setAttribute('rotation', '0 90 0');
                                    behance_link.setAttribute('navigate-on-click', 'url: '+ dict[j][key].behance);
                                    behance_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                    markerEl.appendChild(behance_link);

                                    var behance_image = document.createElement('a-image');

                                    behance_image.setAttribute('id', 'push_behance_image');
                                    behance_image.setAttribute('src', 'resources/models/BEHANCE_white.png');
                                    behance_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                    behance_image.setAttribute('position', '0 0.2 0');
                                    behance_image.setAttribute('rotation', '270 0 -90');

                                    behance_link.appendChild(behance_image);

                                  }

                                  else if (dict[j][key].twitter != ''){

                                    var twit_link = document.createElement('a-cylinder');

                                    twit_link.setAttribute('id', 'push_twitter');
                                    twit_link.setAttribute('class', 'intersectable');
                                    twit_link.setAttribute('radius', '0.51');
                                    twit_link.setAttribute('height', '0.01');
                                    twit_link.setAttribute('color', icon);
                                    twit_link.setAttribute('position', '-1.35 0 4.65');
                                    twit_link.setAttribute('rotation', '0 90 0');
                                    twit_link.setAttribute('navigate-on-click', 'url: '+dict[j][key].twitter);
                                    twit_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                    markerEl.appendChild(twit_link);

                                    var twit_image = document.createElement('a-image');

                                    twit_image.setAttribute('id', 'push_twitter_image');
                                    twit_image.setAttribute('src', 'resources/models/TWITTER_white.png');
                                    twit_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                    twit_image.setAttribute('position', '0 0.2 0');
                                    twit_image.setAttribute('rotation', '270 0 -90');

                                    twit_link.appendChild(twit_image);
                                  }

                                  else if (dict[j][key].slack != ''){

                                    var slack_link = document.createElement('a-cylinder');

                                    slack_link.setAttribute('id', 'push_slack');
                                    slack_link.setAttribute('class', 'intersectable');
                                    slack_link.setAttribute('radius', '0.51');
                                    slack_link.setAttribute('height', '0.01');
                                    slack_link.setAttribute('color', icon);
                                    slack_link.setAttribute('position', '-1.35 0 4.65');
                                    slack_link.setAttribute('rotation', '0 90 0');
                                    slack_link.setAttribute('navigate-on-click', 'url: '+dict[j][key].slack);
                                    slack_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                    markerEl.appendChild(slack_link);

                                    var slack_image = document.createElement('a-image');

                                    slack_image.setAttribute('id', 'push_slack_image');
                                    slack_image.setAttribute('src', 'resources/models/SLACK_white.png');
                                    slack_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                    slack_image.setAttribute('position', '0 0.2 0');
                                    slack_image.setAttribute('rotation', '270 0 -90');

                                    slack_link.appendChild(slack_image);
                                  }

                                  else {

                                    var insta_link = document.createElement('a-cylinder');

                                    insta_link.setAttribute('id', 'push_instagram');
                                    insta_link.setAttribute('class', 'intersectable');
                                    insta_link.setAttribute('radius', '0.51');
                                    insta_link.setAttribute('height', '0.01');
                                    insta_link.setAttribute('color', icon);
                                    insta_link.setAttribute('position', '-1.35 0 4.65');
                                    insta_link.setAttribute('rotation', '0 90 0');
                                    insta_link.setAttribute('navigate-on-click', 'url: '+dict[j][key].instagram);
                                    insta_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                    markerEl.appendChild(insta_link);

                                    var insta_image = document.createElement('a-image');

                                    insta_image.setAttribute('id', 'push_instagram_image');
                                    insta_image.setAttribute('src', 'resources/models/INSTAGRAM_white.png');
                                    insta_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                    insta_image.setAttribute('position', '0 0.2 0');
                                    insta_image.setAttribute('rotation', '270 0 -90');

                                    insta_link.appendChild(insta_image);
                                  }


                                  if (dict[j][key].instagram != ''){

                                    // instagram
                                    var instagram_link = document.createElement('a-cylinder');

                                    instagram_link.setAttribute('id', 'push_instagram');
                                    instagram_link.setAttribute('class', 'intersectable');
                                    instagram_link.setAttribute('radius', '0.51');
                                    instagram_link.setAttribute('height', '0.01');
                                    instagram_link.setAttribute('color', icon);
                                    instagram_link.setAttribute('position', '-0.05 0 4.65');
                                    instagram_link.setAttribute('rotation', '0 90 0');
                                    instagram_link.setAttribute('navigate-on-click', 'url: ' + dict[j][key].instagram);
                                    instagram_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                    markerEl.appendChild(instagram_link);

                                    var instagram_image = document.createElement('a-image');

                                    instagram_image.setAttribute('id', 'push_instagram_image');
                                    instagram_image.setAttribute('src', 'resources/models/INSTAGRAM_white.png');
                                    instagram_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                    instagram_image.setAttribute('position', '0 0.2 0');
                                    instagram_image.setAttribute('rotation', '270 0 -90');

                                    instagram_link.appendChild(instagram_image);
                                  }

                                  else if (dict[j][key].slack != ''){

                                    // slack
                                    var slack_link = document.createElement('a-cylinder');

                                    slack_link.setAttribute('id', 'push_slack');
                                    slack_link.setAttribute('class', 'intersectable');
                                    slack_link.setAttribute('radius', '0.51');
                                    slack_link.setAttribute('height', '0.01');
                                    slack_link.setAttribute('color', icon);
                                    slack_link.setAttribute('position', '-0.05 0 4.65');
                                    slack_link.setAttribute('rotation', '0 90 0');
                                    slack_link.setAttribute('navigate-on-click', 'url: ' + dict[j][key].slack);
                                    slack_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                    markerEl.appendChild(slack_link);

                                    var slack_image = document.createElement('a-image');

                                    slack_image.setAttribute('id', 'push_slack_image');
                                    slack_image.setAttribute('src', 'resources/models/SLACK_white.png');
                                    slack_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                    slack_image.setAttribute('position', '0 0.2 0');
                                    slack_image.setAttribute('rotation', '270 0 -90');

                                    slack_link.appendChild(slack_image);

                                  }

                                  else if (dict[j][key].twitter != ''){

                                    // twitter
                                    var twit_link = document.createElement('a-cylinder');

                                    twit_link.setAttribute('id', 'push_twitter');
                                    twit_link.setAttribute('class', 'intersectable');
                                    twit_link.setAttribute('radius', '0.51');
                                    twit_link.setAttribute('height', '0.01');
                                    twit_link.setAttribute('color', icon);
                                    twit_link.setAttribute('position', '-0.05 0 4.65');
                                    twit_link.setAttribute('rotation', '0 90 0');
                                    twit_link.setAttribute('navigate-on-click', 'url: ' + dict[j][key].twitter);
                                    twit_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                    markerEl.appendChild(twit_link);

                                    var twitter_image = document.createElement('a-image');

                                    twitter_image.setAttribute('id', 'push_twitter_image');
                                    twitter_image.setAttribute('src', 'resources/models/TWITTER_white.png');
                                    twitter_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                    twitter_image.setAttribute('position', '0 0.2 0');
                                    twitter_image.setAttribute('rotation', '270 0 -90');

                                    twit_link.appendChild(twitter_image);
                                  }

                                  else if (dict[j][key].behance != ''){

                                    // behance
                                    var behance_link = document.createElement('a-cylinder');

                                    behance_link.setAttribute('id', 'push_behance');
                                    behance_link.setAttribute('class', 'intersectable');
                                    behance_link.setAttribute('radius', '0.51');
                                    behance_link.setAttribute('height', '0.01');
                                    behance_link.setAttribute('color', icon);
                                    behance_link.setAttribute('position', '-0.05 0 4.65');
                                    behance_link.setAttribute('rotation', '0 90 0');
                                    behance_link.setAttribute('navigate-on-click', 'url: ' + dict[j][key].behance);
                                    behance_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                    markerEl.appendChild(behance_link);

                                    var behance_image = document.createElement('a-image');

                                    behance_image.setAttribute('id', 'push_behance_image');
                                    behance_image.setAttribute('src', 'resources/models/BEHANCE_white.png');
                                    behance_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                    behance_image.setAttribute('position', '0 0.2 0');
                                    behance_image.setAttribute('rotation', '270 0 -90');

                                    behance_link.appendChild(behance_image);
                                  }

                                  else if (dict[j][key].facebook != ''){

                                    // facebook
                                    var facebook_link = document.createElement('a-cylinder');

                                    facebook_link.setAttribute('id', 'push_facebook');
                                    facebook_link.setAttribute('class', 'intersectable');
                                    facebook_link.setAttribute('radius', '0.51');
                                    facebook_link.setAttribute('height', '0.01');
                                    facebook_link.setAttribute('color', icon);
                                    facebook_link.setAttribute('position', '-0.05 0 4.65');
                                    facebook_link.setAttribute('rotation', '0 90 0');
                                    facebook_link.setAttribute('navigate-on-click', 'url: ' + dict[j][key].facebook);
                                    facebook_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                    markerEl.appendChild(facebook_link);

                                    var facebook_image = document.createElement('a-image');

                                    facebook_image.setAttribute('id', 'push_facebook_image');
                                    facebook_image.setAttribute('src', 'resources/models/FACEBOOK_white.png');
                                    facebook_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                    facebook_image.setAttribute('position', '0 0.2 0');
                                    facebook_image.setAttribute('rotation', '270 0 -90');

                                    facebook_link.appendChild(facebook_image);
                                  }

                                  else {

                                    //github

                                    var github_link = document.createElement('a-cylinder');

                                    github_link.setAttribute('id', 'push_github');
                                    github_link.setAttribute('class', 'intersectable');
                                    github_link.setAttribute('radius', '0.51');
                                    github_link.setAttribute('height', '0.01');
                                    github_link.setAttribute('color', icon);
                                    github_link.setAttribute('position', '-0.05 0 4.65');
                                    github_link.setAttribute('rotation', '0 90 0');
                                    github_link.setAttribute('navigate-on-click', 'url: ' + dict[j][key].github);
                                    github_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                    markerEl.appendChild(github_link);

                                    var github_image = document.createElement('a-image');

                                    github_image.setAttribute('id', 'push_github_image');
                                    github_image.setAttribute('src', 'resources/models/GITHUB_white.png');
                                    github_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                    github_image.setAttribute('position', '0 0.2 0');
                                    github_image.setAttribute('rotation', '270 0 -90');

                                    github_link.appendChild(github_image);
                                  }

                                  //whatsapp

                                  var twitter_link = document.createElement('a-cylinder');

                                  twitter_link.setAttribute('id', 'push_twitter');
                                  twitter_link.setAttribute('class', 'intersectable');
                                  twitter_link.setAttribute('radius', '0.51');
                                  twitter_link.setAttribute('height', '0.01');
                                  twitter_link.setAttribute('color', icon);
                                  twitter_link.setAttribute('position', '-3.95 0 4.65');
                                  twitter_link.setAttribute('rotation', '0 90 0');
                                  twitter_link.setAttribute('navigate-on-click', 'url: ' + 'https://wa.me/' + dict[j][key].phone);
                                  twitter_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                  markerEl.appendChild(twitter_link);

                                  var twitter_image = document.createElement('a-image');

                                  twitter_image.setAttribute('id', 'push_twitter_image');
                                  twitter_image.setAttribute('src', 'resources/models/WHATSAPP_white.png');
                                  twitter_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                  twitter_image.setAttribute('position', '0 0.2 0');
                                  twitter_image.setAttribute('rotation', '90 0 0');

                                  twitter_link.appendChild(twitter_image);

                                  var photo_con = document.createElement('a-cylinder');
                                  var Ph = '../user_photos/photo-'+ key +'.png';

                                  photo_con.setAttribute('id', 'photo');
                                  photo_con.setAttribute('radius', '1.625');
                                  photo_con.setAttribute('height', '0.01');
                                  photo_con.setAttribute('position', '2.3 0 1.14');
                                  photo_con.setAttribute('rotation', '0 90 0');
                                  photo_con.setAttribute('src', Ph);

                                  markerEl.appendChild(photo_con);
                          }

                          //BLack option
                          else{

                              // web_page
                              var web_page = document.createElement('a-box');

                              web_page.setAttribute('id', 'push_link');
                              web_page.setAttribute('class', 'intersectable');
                              web_page.setAttribute('width', '2.4');
                              web_page.setAttribute('height', '1');
                              web_page.setAttribute('depth', '0.01');
                              web_page.setAttribute('position', '-3.3 0 3.4');
                              web_page.setAttribute('rotation', '-90 0 0');
                              web_page.setAttribute('color', icon);
                              web_page.setAttribute('navigate-on-click', 'url: ' + dict[j][key].web_page);
                              web_page.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 0; dur: 1000; startEvents: click' );

                              markerEl.appendChild(web_page);

                              var web_image = document.createElement('a-image');

                              web_image.setAttribute('id', 'web_image');
                              web_image.setAttribute('src', 'resources/models/WEBPAGE_Black.png');
                              web_image.setAttribute('width', '2.4');
                              web_image.setAttribute('height', '1');
                              web_image.setAttribute('position', '0 0 0.2');
                              web_image.setAttribute('rotation', '0 0 0');

                              web_page.appendChild(web_image);

                              // linkedin
                              var linkedin_page = document.createElement('a-box');

                              linkedin_page.setAttribute('id', 'push_linkedin');
                              linkedin_page.setAttribute('class', 'intersectable');
                              linkedin_page.setAttribute('width', '2.4');
                              linkedin_page.setAttribute('height', '1');
                              linkedin_page.setAttribute('depth', '0.01');
                              linkedin_page.setAttribute('position', '-0.7 0 3.4');
                              linkedin_page.setAttribute('rotation', '-90 0 0');
                              linkedin_page.setAttribute('color', icon);
                              linkedin_page.setAttribute('navigate-on-click', 'url:' + dict[j][key].linkedin);
                              linkedin_page.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 0; dur: 1000; startEvents: click' );


                              markerEl.appendChild(linkedin_page);

                              var linkedin_image = document.createElement('a-image');

                              linkedin_image.setAttribute('id', 'linkedin_image');
                              linkedin_image.setAttribute('src', 'resources/models/LINKEDIN_Black.png');
                              linkedin_image.setAttribute('width', '2.4');
                              linkedin_image.setAttribute('height', '1');
                              linkedin_image.setAttribute('position', '0 0 0.2');
                              linkedin_image.setAttribute('rotation', '0 0 0');


                              linkedin_page.appendChild(linkedin_image);

                              // email
                              var email_link = document.createElement('a-cylinder');

                              email_link.setAttribute('id', 'push_email');
                              email_link.setAttribute('class', 'intersectable');
                              email_link.setAttribute('radius', '0.51');
                              email_link.setAttribute('height', '0.01');
                              email_link.setAttribute('color', icon);
                              email_link.setAttribute('position', '-2.65 0 4.65');
                              email_link.setAttribute('rotation', '0 90 0');
                              email_link.setAttribute('navigate-on-click_mail', 'url: ' +'mailto: '+ dict[j][key].email);
                              email_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                              markerEl.appendChild(email_link);

                              var email_image = document.createElement('a-image');

                              email_image.setAttribute('id', 'push_github_image');
                              email_image.setAttribute('src', 'resources/models/MAIL_Black.png');
                              email_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                              email_image.setAttribute('position', '0 0.2 0');
                              email_image.setAttribute('rotation', '270 0 -90');

                              email_link.appendChild(email_image);

                              if (dict[j][key].github != ''){

                                // github
                                var github_link = document.createElement('a-cylinder');

                                github_link.setAttribute('id', 'push_github');
                                github_link.setAttribute('class', 'intersectable');
                                github_link.setAttribute('radius', '0.51');
                                github_link.setAttribute('height', '0.01');
                                github_link.setAttribute('color', icon);
                                github_link.setAttribute('position', '-1.35 0 4.65');
                                github_link.setAttribute('rotation', '0 90 0');
                                github_link.setAttribute('navigate-on-click', 'url: '+dict[j][key].github);
                                github_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                markerEl.appendChild(github_link);

                                var github_image = document.createElement('a-image');

                                github_image.setAttribute('id', 'push_github_image');
                                github_image.setAttribute('src', 'resources/models/GITHUB_Black.png');
                                github_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                github_image.setAttribute('position', '0 0.2 0');
                                github_image.setAttribute('rotation', '270 0 -90');

                                github_link.appendChild(github_image);
                              }

                              else if (dict[j][key].facebook != ''){

                                // facebook
                                var facebook_link = document.createElement('a-cylinder');

                                facebook_link.setAttribute('id', 'push_facebook');
                                facebook_link.setAttribute('class', 'intersectable');
                                facebook_link.setAttribute('radius', '0.51');
                                facebook_link.setAttribute('height', '0.01');
                                facebook_link.setAttribute('color', icon);
                                facebook_link.setAttribute('position', '-1.35 0 4.65');
                                facebook_link.setAttribute('rotation', '0 90 0');
                                facebook_link.setAttribute('navigate-on-click', 'url: '+dict[j][key].facebook);
                                facebook_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                markerEl.appendChild(facebook_link);

                                var facebook_image = document.createElement('a-image');

                                facebook_image.setAttribute('id', 'push_facebook_image');
                                facebook_image.setAttribute('src', 'resources/models/FACEBOOK_Black.png');
                                facebook_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                facebook_image.setAttribute('position', '0 0.2 0');
                                facebook_image.setAttribute('rotation', '270 0 -90');

                                facebook_link.appendChild(facebook_image);
                              }

                              else if (dict[j][key].behance != ''){

                                // behance
                                var behance_link = document.createElement('a-cylinder');

                                behance_link.setAttribute('id', 'push_behance');
                                behance_link.setAttribute('class', 'intersectable');
                                behance_link.setAttribute('radius', '0.51');
                                behance_link.setAttribute('height', '0.01');
                                behance_link.setAttribute('color', icon);
                                behance_link.setAttribute('position', '-1.35 0 4.65');
                                behance_link.setAttribute('rotation', '0 90 0');
                                behance_link.setAttribute('navigate-on-click', 'url: '+dict[j][key].behance);
                                behance_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                markerEl.appendChild(behance_link);

                                var behance_image = document.createElement('a-image');

                                behance_image.setAttribute('id', 'push_behance_image');
                                behance_image.setAttribute('src', 'resources/models/BEHANCE_Black.png');
                                behance_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                behance_image.setAttribute('position', '0 0.2 0');
                                behance_image.setAttribute('rotation', '270 0 -90');

                                behance_link.appendChild(behance_image);
                              }

                              else if (dict[j][key].twitter != ''){

                                // twitter
                                var twit_link = document.createElement('a-cylinder');

                                twit_link.setAttribute('id', 'push_twitter');
                                twit_link.setAttribute('class', 'intersectable');
                                twit_link.setAttribute('radius', '0.51');
                                twit_link.setAttribute('height', '0.01');
                                twit_link.setAttribute('color', icon);
                                twit_link.setAttribute('position', '-1.35 0 4.65');
                                twit_link.setAttribute('rotation', '0 90 0');
                                twit_link.setAttribute('navigate-on-click', 'url: '+dict[j][key].twitter);
                                twit_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                markerEl.appendChild(twit_link);

                                var twit_image = document.createElement('a-image');

                                twit_image.setAttribute('id', 'push_twitter_image');
                                twit_image.setAttribute('src', 'resources/models/TWITTER_Black.png');
                                twit_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                twit_image.setAttribute('position', '0 0.2 0');
                                twit_image.setAttribute('rotation', '270 0 -90');

                                twit_link.appendChild(twit_image);
                              }

                              else if (dict[j][key].slack != ''){

                                // slack
                                var slack_link = document.createElement('a-cylinder');

                                slack_link.setAttribute('id', 'push_slack');
                                slack_link.setAttribute('class', 'intersectable');
                                slack_link.setAttribute('radius', '0.51');
                                slack_link.setAttribute('height', '0.01');
                                slack_link.setAttribute('color', icon);
                                slack_link.setAttribute('position', '-1.35 0 4.65');
                                slack_link.setAttribute('rotation', '0 90 0');
                                slack_link.setAttribute('navigate-on-click', 'url: '+dict[j][key].slack);
                                slack_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                markerEl.appendChild(slack_link);

                                var slack_image = document.createElement('a-image');

                                slack_image.setAttribute('id', 'push_slack_image');
                                slack_image.setAttribute('src', 'resources/models/SLACK_Black.png');
                                slack_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                slack_image.setAttribute('position', '270 0 -90');

                                slack_link.appendChild(slack_image);
                              }

                              else{

                                //instagram

                                var insta_link = document.createElement('a-cylinder');

                                insta_link.setAttribute('id', 'push_instagram');
                                insta_link.setAttribute('class', 'intersectable');
                                insta_link.setAttribute('radius', '0.51');
                                insta_link.setAttribute('height', '0.01');
                                insta_link.setAttribute('color', icon);
                                insta_link.setAttribute('position', '-1.35 0 4.65');
                                insta_link.setAttribute('rotation', '0 90 0');
                                insta_link.setAttribute('navigate-on-click', 'url: '+dict[j][key].instagram);
                                insta_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                markerEl.appendChild(insta_link);

                                var insta_image = document.createElement('a-image');

                                insta_image.setAttribute('id', 'push_instagram_image');
                                insta_image.setAttribute('src', 'resources/models/INSTAGRAM_Black.png');
                                insta_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                insta_image.setAttribute('position', '0 0.2 0');
                                insta_image.setAttribute('rotation', '270 0 -90');

                                insta_link.appendChild(insta_image);
                              }


                              if (dict[j][key].instagram != ''){

                                // instagram
                                var instagram_link = document.createElement('a-cylinder');

                                instagram_link.setAttribute('id', 'push_instagram');
                                instagram_link.setAttribute('class', 'intersectable');
                                instagram_link.setAttribute('radius', '0.51');
                                instagram_link.setAttribute('height', '0.01');
                                instagram_link.setAttribute('color', icon);
                                instagram_link.setAttribute('position', '-0.05 0 4.65');
                                instagram_link.setAttribute('rotation', '0 90 0');
                                instagram_link.setAttribute('navigate-on-click', 'url: ' + dict[j][key].instagram);
                                instagram_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                markerEl.appendChild(instagram_link);

                                var instagram_image = document.createElement('a-image');

                                instagram_image.setAttribute('id', 'push_instagram_image');
                                instagram_image.setAttribute('src', 'resources/models/INSTAGRAM_Black.png');
                                instagram_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                instagram_image.setAttribute('position', '0 0.2 0');
                                instagram_image.setAttribute('rotation', '270 0 -90');

                                instagram_link.appendChild(instagram_image);
                              }

                              else if (dict[j][key].slack != ''){

                                // slack
                                var slack_link = document.createElement('a-cylinder');

                                slack_link.setAttribute('id', 'push_slack');
                                slack_link.setAttribute('class', 'intersectable');
                                slack_link.setAttribute('radius', '0.51');
                                slack_link.setAttribute('height', '0.01');
                                slack_link.setAttribute('color', icon);
                                slack_link.setAttribute('position', '-0.05 0 4.65');
                                slack_link.setAttribute('rotation', '0 90 0');
                                slack_link.setAttribute('navigate-on-click', 'url: '+dict[j][key].slack);
                                slack_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                markerEl.appendChild(slack_link);

                                var slack_image = document.createElement('a-image');

                                slack_image.setAttribute('id', 'push_slack_image');
                                slack_image.setAttribute('src', 'resources/models/SLACK_Black.png');
                                slack_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                slack_image.setAttribute('position', '270 0 -90');

                                slack_link.appendChild(slack_image);
                              }

                              else if (dict[j][key].twitter != ''){

                                // twitter

                                var twit_link = document.createElement('a-cylinder');

                                twit_link.setAttribute('id', 'push_twitter');
                                twit_link.setAttribute('class', 'intersectable');
                                twit_link.setAttribute('radius', '0.51');
                                twit_link.setAttribute('height', '0.01');
                                twit_link.setAttribute('color', icon);
                                twit_link.setAttribute('position', '-0.05 0 4.65');
                                twit_link.setAttribute('rotation', '0 90 0');
                                twit_link.setAttribute('navigate-on-click', 'url: '+dict[j][key].twitter);
                                twit_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                markerEl.appendChild(twit_link);

                                var twit_image = document.createElement('a-image');

                                twit_image.setAttribute('id', 'push_twitter_image');
                                twit_image.setAttribute('src', 'resources/models/TWITTER_Black.png');
                                twit_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                twit_image.setAttribute('position', '270 0 -90');

                                twit_link.appendChild(twit_image);
                              }

                              else if (dict[j][key].behance != ''){

                                // behance
                                var behance_link = document.createElement('a-cylinder');

                                behance_link.setAttribute('id', 'push_behance');
                                behance_link.setAttribute('class', 'intersectable');
                                behance_link.setAttribute('radius', '0.51');
                                behance_link.setAttribute('height', '0.01');
                                behance_link.setAttribute('color', icon);
                                behance_link.setAttribute('position', '-0.05 0 4.65');
                                behance_link.setAttribute('rotation', '0 90 0');
                                behance_link.setAttribute('navigate-on-click', 'url: '+dict[j][key].behance);
                                behance_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                markerEl.appendChild(behance_link);

                                var behance_image = document.createElement('a-image');

                                behance_image.setAttribute('id', 'push_behance_image');
                                behance_image.setAttribute('src', 'resources/models/BEHANCE_Black.png');
                                behance_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                behance_image.setAttribute('position', '270 0 -90');

                                behance_link.appendChild(behance_image);
                              }

                              else if (dict[j][key].facebook != ''){

                                // facebook
                                var facebook_link = document.createElement('a-cylinder');

                                facebook_link.setAttribute('id', 'push_facebook');
                                facebook_link.setAttribute('class', 'intersectable');
                                facebook_link.setAttribute('radius', '0.51');
                                facebook_link.setAttribute('height', '0.01');
                                facebook_link.setAttribute('color', icon);
                                facebook_link.setAttribute('position', '-0.05 0 4.65');
                                facebook_link.setAttribute('rotation', '0 90 0');
                                facebook_link.setAttribute('navigate-on-click', 'url: '+dict[j][key].facebook);
                                facebook_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                markerEl.appendChild(facebook_link);

                                var facebook_image = document.createElement('a-image');

                                facebook_image.setAttribute('id', 'push_facebook_image');
                                facebook_image.setAttribute('src', 'resources/models/FACEBOOK_Black.png');
                                facebook_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                facebook_image.setAttribute('position', '270 0 -90');

                                facebook_link.appendChild(facebook_image);
                              }

                              else{

                                // github
                                var github_link = document.createElement('a-cylinder');

                                github_link.setAttribute('id', 'push_github');
                                github_link.setAttribute('class', 'intersectable');
                                github_link.setAttribute('radius', '0.51');
                                github_link.setAttribute('height', '0.01');
                                github_link.setAttribute('color', icon);
                                github_link.setAttribute('position', '-0.05 0 4.65');
                                github_link.setAttribute('rotation', '0 90 0');
                                github_link.setAttribute('navigate-on-click', 'url: '+dict[j][key].github);
                                github_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                                markerEl.appendChild(github_link);

                                var github_image = document.createElement('a-image');

                                github_image.setAttribute('id', 'push_github_image');
                                github_image.setAttribute('src', 'resources/models/GITHUB_Black.png');
                                github_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                                github_image.setAttribute('position', '270 0 -90');

                                github_link.appendChild(github_image);
                              }

                              //whatsapp

                              var twitter_link = document.createElement('a-cylinder');

                              twitter_link.setAttribute('id', 'push_twitter');
                              twitter_link.setAttribute('class', 'intersectable');
                              twitter_link.setAttribute('radius', '0.51');
                              twitter_link.setAttribute('height', '0.01');
                              twitter_link.setAttribute('color', icon);
                              twitter_link.setAttribute('position', '-3.95 0 4.65');
                              twitter_link.setAttribute('rotation', '0 90 0');
                              twitter_link.setAttribute('navigate-on-click', 'url: ' + 'https://wa.me/' + dict[j][key].phone);
                              twitter_link.setAttribute('animation','property: rotation; from: 0 0 0; to: 360 0 360; dur: 1000; startEvents: click' );

                              markerEl.appendChild(twitter_link);

                              var twitter_image = document.createElement('a-image');

                              twitter_image.setAttribute('id', 'push_twitter_image');
                              twitter_image.setAttribute('src', 'resources/models/WHATSAPP_Black.png');
                              twitter_image.setAttribute('geometry', 'primitive: circle; radius: 0.51');
                              twitter_image.setAttribute('position', '0 0.2 0');
                              twitter_image.setAttribute('rotation', '270 0 -90');

                              twitter_link.appendChild(twitter_image);

                              var photo_con = document.createElement('a-cylinder');
                              var Ph = '../user_photos/photo-'+ key +'.png';

                              photo_con.setAttribute('id', 'photo');
                              photo_con.setAttribute('radius', '1.625');
                              photo_con.setAttribute('height', '0.01');
                              photo_con.setAttribute('position', '2.3 0 1.14');
                              photo_con.setAttribute('rotation', '0 90 0');
                              photo_con.setAttribute('src', Ph);

                              markerEl.appendChild(photo_con);
                          }


                    }
          }
      }
  }
}
});

  AFRAME.registerComponent('navigate-on-click', {
      schema: {
        url: {default: ''}
        },

        init: function () {
          var data = this.data;
          var el = this.el;

          el.addEventListener('click', function () {
            window.location.href = data.url;
            });
      }
});

  AFRAME.registerComponent('navigate-on-click_mail', {
      schema: {
        href: {default: 'mailto:'}
        },

        init: function () {
          var data = this.data;
          var el = this.el;

          el.addEventListener('click', function () {
            window.location.href = data.url;
            });
      }
});

    AFRAME.registerComponent('navigate-click', {
      schema: {
        url: {default: ''}
        },

        init: function () {
          var data = this.data;
          var el = this.el;

          el.addEventListener('click', function () {
            window.location.href = data.url;
            });
      }
});