<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function(){

	let precent = document.getElementsByClassName('precent'),
	    dolar = document.getElementsByClassName('dolar'),
	    switch_in = document.getElementsByClassName('switch'),
	    toggle = document.getElementsByClassName('toggle-bg'),
        input_price = document.getElementsByClassName('input_price'),
        hour_change = document.getElementsByClassName('hour_change'),
        day_change = document.getElementsByClassName('day_change'),
        week_change = document.getElementsByClassName('week_change'),
        month_change = document.getElementsByClassName('month_change'),
        select = document.getElementById('option_id');
        

  	var promise = $.ajax({
      url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD'
    }).then(function (result) {  
       
         for (var i = 0; i < input_price.length; i++) {
           input_price[i].value = '$' + result.ask;
        };
        for (var i = 0; i < hour_change.length; i++) {
            hour_change[i].value = result.changes.percent.hour + '%';
        }
         for (var i = 0; i < day_change.length; i++) {
           day_change[i].value = result.changes.percent.day + '%';
        }
         for (var i = 0; i < week_change.length; i++) { 
           week_change[i].value = result.changes.percent.week + '%';
        }
        for (var i = 0; i < month_change.length; i++) {
           month_change[i].value = result.changes.percent.month + '%';

        };
          $('#option_id').change(function(){
          val = select.value;
         
          if (val == "USD"){
              var promise = $.ajax({
                    url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD'
                  }).then(function (result) { 
              precent[0].addEventListener('change',  function(){
                          switch_in[0].classList.remove('power');
                          switch_in[0].classList.add('off');
                          toggle[0].style.background = "#3aa5da";
                          hour_change[0].value = result.changes.percent.hour + '%';
                          day_change[0].value = result.changes.percent.day + '%';
                          week_change[0].value = result.changes.percent.week + '%';
                          month_change[0].value = result.changes.percent.month + '%';
                      });
                       dolar[0].addEventListener('change',  function(){
                          switch_in[0].classList.remove('off');
                          switch_in[0].classList.add('power');
                          toggle[0].style.background = "#b0b1b2";
                          hour_change[0].value = '$' + result.changes.price.hour;
                          day_change[0].value = '$' + result.changes.price.day;
                          week_change[0].value = '$' + result.changes.price.week;
                          month_change[0].value = '$' + result.changes.price.month;
                      });
                        precent[1].addEventListener('change',  function(){
                          switch_in[1].classList.add('off');
                          switch_in[1].classList.remove('power');
                          toggle[1].style.background = "#3aa5da";
                          hour_change[1].value = result.changes.percent.hour + '%';
                          day_change[1].value = result.changes.percent.day + '%';
                          week_change[1].value = result.changes.percent.week + '%';
                          month_change[1].value = result.changes.percent.month + '%';
                      });
                        dolar[1].addEventListener('change',  function(){
                          switch_in[1].classList.add('power');
                          switch_in[1].classList.remove('off');
                          toggle[1].style.background = "#b0b1b2";
                          hour_change[1].value = '$' + result.changes.price.hour;
                          day_change[1].value = '$' + result.changes.price.day;
                          week_change[1].value = '$' + result.changes.price.week;
                          month_change[1].value = '$' + result.changes.price.month;
                      });
                        precent[2].addEventListener('change',  function(){
                          switch_in[2].classList.add('off');
                          switch_in[2].classList.remove('power');
                          toggle[2].style.background = "#3aa5da";
                          hour_change[2].value = result.changes.percent.hour + '%';
                          day_change[2].value = result.changes.percent.day + '%';
                          week_change[2].value = result.changes.percent.week + '%';
                          month_change[2].value = result.changes.percent.month + '%';
                      });
                        dolar[2].addEventListener('change',  function(){
                          switch_in[2].classList.add('power');
                          switch_in[2].classList.remove('off');
                          toggle[2].style.background = "#b0b1b2";
                          hour_change[2].value = '$' + result.changes.price.hour;
                          day_change[2].value = '$' + result.changes.price.day;
                          week_change[2].value = '$' + result.changes.price.week;
                          month_change[2].value = '$' + result.changes.price.month;
                      });

               

                   
                  });
                
          };

          if(val == "RUB"){
              var promise = $.ajax({
                    url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD'
                  }).then(function (result) { 
              precent[0].addEventListener('change',  function(){
                          switch_in[0].classList.remove('power');
                          switch_in[0].classList.add('off');
                          toggle[0].style.background = "#3aa5da";
                          hour_change[0].value = result.changes.percent.hour + '%';
                          day_change[0].value = result.changes.percent.day + '%';
                          week_change[0].value = result.changes.percent.week + '%';
                          month_change[0].value = result.changes.percent.month + '%';
                      });
                       dolar[0].addEventListener('change',  function(){
                          switch_in[0].classList.remove('off');
                          switch_in[0].classList.add('power');
                          toggle[0].style.background = "#b0b1b2";
                          hour_change[0].value = '₽' + 67*result.changes.price.hour;
                          day_change[0].value = '₽' + 67*result.changes.price.day;
                          week_change[0].value = '₽' + 67*result.changes.price.week;
                          month_change[0].value = '₽' + 67*result.changes.price.month;
                      });
                        precent[1].addEventListener('change',  function(){
                          switch_in[1].classList.add('off');
                          switch_in[1].classList.remove('power');
                          toggle[1].style.background = "#3aa5da";
                          hour_change[1].value = result.changes.percent.hour + '%';
                          day_change[1].value = result.changes.percent.day + '%';
                          week_change[1].value = result.changes.percent.week + '%';
                          month_change[1].value = result.changes.percent.month + '%';
                      });
                        dolar[1].addEventListener('change',  function(){
                          switch_in[1].classList.add('power');
                          switch_in[1].classList.remove('off');
                          toggle[1].style.background = "#b0b1b2";
                          hour_change[1].value = '₽' + result.changes.price.hour;
                          day_change[1].value = '₽' + result.changes.price.day;
                          week_change[1].value = '₽' + result.changes.price.week;
                          month_change[1].value = '₽' + result.changes.price.month;
                      });
                        precent[2].addEventListener('change',  function(){
                          switch_in[2].classList.add('off');
                          switch_in[2].classList.remove('power');
                          toggle[2].style.background = "#3aa5da";
                          hour_change[2].value = result.changes.percent.hour + '%';
                          day_change[2].value = result.changes.percent.day + '%';
                          week_change[2].value = result.changes.percent.week + '%';
                          month_change[2].value = result.changes.percent.month + '%';
                      });
                        dolar[2].addEventListener('change',  function(){
                          switch_in[2].classList.add('power');
                          switch_in[2].classList.remove('off');
                          toggle[2].style.background = "#b0b1b2";
                          hour_change[2].value = '₽' + result.changes.price.hour;
                          day_change[2].value = '₽' + result.changes.price.day;
                          week_change[2].value = '₽' + result.changes.price.week;
                          month_change[2].value = '₽' + result.changes.price.month;
                      });

               

                   
                  });
          };
          if(val == "GBR"){
                 var promise = $.ajax({
                       url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD'
                     }).then(function (result) { 
                 precent[0].addEventListener('change',  function(){
                             switch_in[0].classList.remove('power');
                             switch_in[0].classList.add('off');
                             toggle[0].style.background = "#3aa5da";
                             hour_change[0].value = result.changes.percent.hour + '%';
                             day_change[0].value = result.changes.percent.day + '%';
                             week_change[0].value = result.changes.percent.week + '%';
                             month_change[0].value = result.changes.percent.month + '%';
                         });
                          dolar[0].addEventListener('change',  function(){
                             switch_in[0].classList.remove('off');
                             switch_in[0].classList.add('power');
                             toggle[0].style.background = "#b0b1b2";
                             hour_change[0].value = '£' + 1.30*67*result.changes.price.hour;
                             day_change[0].value = '£' + 1.30*67*result.changes.price.day;
                             week_change[0].value = '£' + 1.30*67*result.changes.price.week;
                             month_change[0].value = '£' + 1.30*67*result.changes.price.month;
                         });
                           precent[1].addEventListener('change',  function(){
                             switch_in[1].classList.add('off');
                             switch_in[1].classList.remove('power');
                             toggle[1].style.background = "#3aa5da";
                             hour_change[1].value = result.changes.percent.hour + '%';
                             day_change[1].value = result.changes.percent.day + '%';
                             week_change[1].value = result.changes.percent.week + '%';
                             month_change[1].value = result.changes.percent.month + '%';
                         });
                           dolar[1].addEventListener('change',  function(){
                             switch_in[1].classList.add('power');
                             switch_in[1].classList.remove('off');
                             toggle[1].style.background = "#b0b1b2";
                             hour_change[1].value = '£' + 1.30*result.changes.price.hour;
                             day_change[1].value = '£' + 1.30*result.changes.price.day;
                             week_change[1].value = '£' + 1.30*result.changes.price.week;
                             month_change[1].value = '£' + 1.30*result.changes.price.month;
                         });
                           precent[2].addEventListener('change',  function(){
                             switch_in[2].classList.add('off');
                             switch_in[2].classList.remove('power');
                             toggle[2].style.background = "#3aa5da";
                             hour_change[2].value = result.changes.percent.hour + '%';
                             day_change[2].value = result.changes.percent.day + '%';
                             week_change[2].value = result.changes.percent.week + '%';
                             month_change[2].value = result.changes.percent.month + '%';
                         });
                           dolar[2].addEventListener('change',  function(){
                             switch_in[2].classList.add('power');
                             switch_in[2].classList.remove('off');
                             toggle[2].style.background = "#b0b1b2";
                             hour_change[2].value = '£' + 1.30*result.changes.price.hour;
                             day_change[2].value = '£' + 1.30*result.changes.price.day;
                             week_change[2].value = '£' + 1.30*result.changes.price.week;
                             month_change[2].value = '£' + 1.30*result.changes.price.month;
                         });

                  

                      
                     });
             };

         

        });

        precent[0].addEventListener('change',  function(){
            switch_in[0].classList.remove('power');
            switch_in[0].classList.add('off');
            toggle[0].style.background = "#3aa5da";
            hour_change[0].value = result.changes.percent.hour + '%';
            day_change[0].value = result.changes.percent.day + '%';
            week_change[0].value = result.changes.percent.week + '%';
            month_change[0].value = result.changes.percent.month + '%';
        });
         dolar[0].addEventListener('change',  function(){
            switch_in[0].classList.remove('off');
            switch_in[0].classList.add('power');
            toggle[0].style.background = "#b0b1b2";
            hour_change[0].value = '$' + result.changes.price.hour;
            day_change[0].value = '$' + result.changes.price.day;
            week_change[0].value = '$' + result.changes.price.week;
            month_change[0].value = '$' + result.changes.price.month;
        });
          precent[1].addEventListener('change',  function(){
            switch_in[1].classList.add('off');
            switch_in[1].classList.remove('power');
            toggle[1].style.background = "#3aa5da";
            hour_change[1].value = result.changes.percent.hour + '%';
            day_change[1].value = result.changes.percent.day + '%';
            week_change[1].value = result.changes.percent.week + '%';
            month_change[1].value = result.changes.percent.month + '%';
        });
          dolar[1].addEventListener('change',  function(){
            switch_in[1].classList.add('power');
            switch_in[1].classList.remove('off');
            toggle[1].style.background = "#b0b1b2";
            hour_change[1].value = '$' + result.changes.price.hour;
            day_change[1].value = '$' + result.changes.price.day;
            week_change[1].value = '$' + result.changes.price.week;
            month_change[1].value = '$' + result.changes.price.month;
        });
          precent[2].addEventListener('change',  function(){
            switch_in[2].classList.add('off');
            switch_in[2].classList.remove('power');
            toggle[2].style.background = "#3aa5da";
            hour_change[2].value = result.changes.percent.hour + '%';
            day_change[2].value = result.changes.percent.day + '%';
            week_change[2].value = result.changes.percent.week + '%';
            month_change[2].value = result.changes.percent.month + '%';
        });
          dolar[2].addEventListener('change',  function(){
            switch_in[2].classList.add('power');
            switch_in[2].classList.remove('off');
            toggle[2].style.background = "#b0b1b2";
            hour_change[2].value = '$' + result.changes.price.hour;
            day_change[2].value = '$' + result.changes.price.day;
            week_change[2].value = '$' + result.changes.price.week;
            month_change[2].value = '$' + result.changes.price.month;
        });
     
    }).catch(function (err) {
      console.log('err', err)
    })
	

});

=======
document.addEventListener('DOMContentLoaded', function(){

	let precent = document.getElementsByClassName('precent'),
	    dolar = document.getElementsByClassName('dolar'),
	    switch_in = document.getElementsByClassName('switch'),
	    toggle = document.getElementsByClassName('toggle-bg'),
        input_price = document.getElementsByClassName('input_price'),
        hour_change = document.getElementsByClassName('hour_change'),
        day_change = document.getElementsByClassName('day_change'),
        week_change = document.getElementsByClassName('week_change'),
        month_change = document.getElementsByClassName('month_change'),
        select = document.getElementById('option_id');
        

  	var promise = $.ajax({
      url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD'
    }).then(function (result) {  
       
         for (var i = 0; i < input_price.length; i++) {
           input_price[i].value = '$' + result.ask;
        };
        for (var i = 0; i < hour_change.length; i++) {
            hour_change[i].value = result.changes.percent.hour + '%';
        }
         for (var i = 0; i < day_change.length; i++) {
           day_change[i].value = result.changes.percent.day + '%';
        }
         for (var i = 0; i < week_change.length; i++) { 
           week_change[i].value = result.changes.percent.week + '%';
        }
        for (var i = 0; i < month_change.length; i++) {
           month_change[i].value = result.changes.percent.month + '%';

        };
          $('#option_id').change(function(){
          val = select.value;
         
          if (val == "USD"){
              var promise = $.ajax({
                    url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD'
                  }).then(function (result) { 
              precent[0].addEventListener('change',  function(){
                          switch_in[0].classList.remove('power');
                          switch_in[0].classList.add('off');
                          toggle[0].style.background = "#3aa5da";
                          hour_change[0].value = result.changes.percent.hour + '%';
                          day_change[0].value = result.changes.percent.day + '%';
                          week_change[0].value = result.changes.percent.week + '%';
                          month_change[0].value = result.changes.percent.month + '%';
                      });
                       dolar[0].addEventListener('change',  function(){
                          switch_in[0].classList.remove('off');
                          switch_in[0].classList.add('power');
                          toggle[0].style.background = "#b0b1b2";
                          hour_change[0].value = '$' + result.changes.price.hour;
                          day_change[0].value = '$' + result.changes.price.day;
                          week_change[0].value = '$' + result.changes.price.week;
                          month_change[0].value = '$' + result.changes.price.month;
                      });
                        precent[1].addEventListener('change',  function(){
                          switch_in[1].classList.add('off');
                          switch_in[1].classList.remove('power');
                          toggle[1].style.background = "#3aa5da";
                          hour_change[1].value = result.changes.percent.hour + '%';
                          day_change[1].value = result.changes.percent.day + '%';
                          week_change[1].value = result.changes.percent.week + '%';
                          month_change[1].value = result.changes.percent.month + '%';
                      });
                        dolar[1].addEventListener('change',  function(){
                          switch_in[1].classList.add('power');
                          switch_in[1].classList.remove('off');
                          toggle[1].style.background = "#b0b1b2";
                          hour_change[1].value = '$' + result.changes.price.hour;
                          day_change[1].value = '$' + result.changes.price.day;
                          week_change[1].value = '$' + result.changes.price.week;
                          month_change[1].value = '$' + result.changes.price.month;
                      });
                        precent[2].addEventListener('change',  function(){
                          switch_in[2].classList.add('off');
                          switch_in[2].classList.remove('power');
                          toggle[2].style.background = "#3aa5da";
                          hour_change[2].value = result.changes.percent.hour + '%';
                          day_change[2].value = result.changes.percent.day + '%';
                          week_change[2].value = result.changes.percent.week + '%';
                          month_change[2].value = result.changes.percent.month + '%';
                      });
                        dolar[2].addEventListener('change',  function(){
                          switch_in[2].classList.add('power');
                          switch_in[2].classList.remove('off');
                          toggle[2].style.background = "#b0b1b2";
                          hour_change[2].value = '$' + result.changes.price.hour;
                          day_change[2].value = '$' + result.changes.price.day;
                          week_change[2].value = '$' + result.changes.price.week;
                          month_change[2].value = '$' + result.changes.price.month;
                      });

               

                   
                  });
                
          };

          if(val == "RUB"){
              var promise = $.ajax({
                    url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD'
                  }).then(function (result) { 
              precent[0].addEventListener('change',  function(){
                          switch_in[0].classList.remove('power');
                          switch_in[0].classList.add('off');
                          toggle[0].style.background = "#3aa5da";
                          hour_change[0].value = result.changes.percent.hour + '%';
                          day_change[0].value = result.changes.percent.day + '%';
                          week_change[0].value = result.changes.percent.week + '%';
                          month_change[0].value = result.changes.percent.month + '%';
                      });
                       dolar[0].addEventListener('change',  function(){
                          switch_in[0].classList.remove('off');
                          switch_in[0].classList.add('power');
                          toggle[0].style.background = "#b0b1b2";
                          hour_change[0].value = '₽' + 67*result.changes.price.hour;
                          day_change[0].value = '₽' + 67*result.changes.price.day;
                          week_change[0].value = '₽' + 67*result.changes.price.week;
                          month_change[0].value = '₽' + 67*result.changes.price.month;
                      });
                        precent[1].addEventListener('change',  function(){
                          switch_in[1].classList.add('off');
                          switch_in[1].classList.remove('power');
                          toggle[1].style.background = "#3aa5da";
                          hour_change[1].value = result.changes.percent.hour + '%';
                          day_change[1].value = result.changes.percent.day + '%';
                          week_change[1].value = result.changes.percent.week + '%';
                          month_change[1].value = result.changes.percent.month + '%';
                      });
                        dolar[1].addEventListener('change',  function(){
                          switch_in[1].classList.add('power');
                          switch_in[1].classList.remove('off');
                          toggle[1].style.background = "#b0b1b2";
                          hour_change[1].value = '₽' + result.changes.price.hour;
                          day_change[1].value = '₽' + result.changes.price.day;
                          week_change[1].value = '₽' + result.changes.price.week;
                          month_change[1].value = '₽' + result.changes.price.month;
                      });
                        precent[2].addEventListener('change',  function(){
                          switch_in[2].classList.add('off');
                          switch_in[2].classList.remove('power');
                          toggle[2].style.background = "#3aa5da";
                          hour_change[2].value = result.changes.percent.hour + '%';
                          day_change[2].value = result.changes.percent.day + '%';
                          week_change[2].value = result.changes.percent.week + '%';
                          month_change[2].value = result.changes.percent.month + '%';
                      });
                        dolar[2].addEventListener('change',  function(){
                          switch_in[2].classList.add('power');
                          switch_in[2].classList.remove('off');
                          toggle[2].style.background = "#b0b1b2";
                          hour_change[2].value = '₽' + result.changes.price.hour;
                          day_change[2].value = '₽' + result.changes.price.day;
                          week_change[2].value = '₽' + result.changes.price.week;
                          month_change[2].value = '₽' + result.changes.price.month;
                      });

               

                   
                  });
          };
          if(val == "GBR"){
                 var promise = $.ajax({
                       url: 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD'
                     }).then(function (result) { 
                 precent[0].addEventListener('change',  function(){
                             switch_in[0].classList.remove('power');
                             switch_in[0].classList.add('off');
                             toggle[0].style.background = "#3aa5da";
                             hour_change[0].value = result.changes.percent.hour + '%';
                             day_change[0].value = result.changes.percent.day + '%';
                             week_change[0].value = result.changes.percent.week + '%';
                             month_change[0].value = result.changes.percent.month + '%';
                         });
                          dolar[0].addEventListener('change',  function(){
                             switch_in[0].classList.remove('off');
                             switch_in[0].classList.add('power');
                             toggle[0].style.background = "#b0b1b2";
                             hour_change[0].value = '£' + 1.30*67*result.changes.price.hour;
                             day_change[0].value = '£' + 1.30*67*result.changes.price.day;
                             week_change[0].value = '£' + 1.30*67*result.changes.price.week;
                             month_change[0].value = '£' + 1.30*67*result.changes.price.month;
                         });
                           precent[1].addEventListener('change',  function(){
                             switch_in[1].classList.add('off');
                             switch_in[1].classList.remove('power');
                             toggle[1].style.background = "#3aa5da";
                             hour_change[1].value = result.changes.percent.hour + '%';
                             day_change[1].value = result.changes.percent.day + '%';
                             week_change[1].value = result.changes.percent.week + '%';
                             month_change[1].value = result.changes.percent.month + '%';
                         });
                           dolar[1].addEventListener('change',  function(){
                             switch_in[1].classList.add('power');
                             switch_in[1].classList.remove('off');
                             toggle[1].style.background = "#b0b1b2";
                             hour_change[1].value = '£' + 1.30*result.changes.price.hour;
                             day_change[1].value = '£' + 1.30*result.changes.price.day;
                             week_change[1].value = '£' + 1.30*result.changes.price.week;
                             month_change[1].value = '£' + 1.30*result.changes.price.month;
                         });
                           precent[2].addEventListener('change',  function(){
                             switch_in[2].classList.add('off');
                             switch_in[2].classList.remove('power');
                             toggle[2].style.background = "#3aa5da";
                             hour_change[2].value = result.changes.percent.hour + '%';
                             day_change[2].value = result.changes.percent.day + '%';
                             week_change[2].value = result.changes.percent.week + '%';
                             month_change[2].value = result.changes.percent.month + '%';
                         });
                           dolar[2].addEventListener('change',  function(){
                             switch_in[2].classList.add('power');
                             switch_in[2].classList.remove('off');
                             toggle[2].style.background = "#b0b1b2";
                             hour_change[2].value = '£' + 1.30*result.changes.price.hour;
                             day_change[2].value = '£' + 1.30*result.changes.price.day;
                             week_change[2].value = '£' + 1.30*result.changes.price.week;
                             month_change[2].value = '£' + 1.30*result.changes.price.month;
                         });

                  

                      
                     });
             };

         

        });

        precent[0].addEventListener('change',  function(){
            switch_in[0].classList.remove('power');
            switch_in[0].classList.add('off');
            toggle[0].style.background = "#3aa5da";
            hour_change[0].value = result.changes.percent.hour + '%';
            day_change[0].value = result.changes.percent.day + '%';
            week_change[0].value = result.changes.percent.week + '%';
            month_change[0].value = result.changes.percent.month + '%';
        });
         dolar[0].addEventListener('change',  function(){
            switch_in[0].classList.remove('off');
            switch_in[0].classList.add('power');
            toggle[0].style.background = "#b0b1b2";
            hour_change[0].value = '$' + result.changes.price.hour;
            day_change[0].value = '$' + result.changes.price.day;
            week_change[0].value = '$' + result.changes.price.week;
            month_change[0].value = '$' + result.changes.price.month;
        });
          precent[1].addEventListener('change',  function(){
            switch_in[1].classList.add('off');
            switch_in[1].classList.remove('power');
            toggle[1].style.background = "#3aa5da";
            hour_change[1].value = result.changes.percent.hour + '%';
            day_change[1].value = result.changes.percent.day + '%';
            week_change[1].value = result.changes.percent.week + '%';
            month_change[1].value = result.changes.percent.month + '%';
        });
          dolar[1].addEventListener('change',  function(){
            switch_in[1].classList.add('power');
            switch_in[1].classList.remove('off');
            toggle[1].style.background = "#b0b1b2";
            hour_change[1].value = '$' + result.changes.price.hour;
            day_change[1].value = '$' + result.changes.price.day;
            week_change[1].value = '$' + result.changes.price.week;
            month_change[1].value = '$' + result.changes.price.month;
        });
          precent[2].addEventListener('change',  function(){
            switch_in[2].classList.add('off');
            switch_in[2].classList.remove('power');
            toggle[2].style.background = "#3aa5da";
            hour_change[2].value = result.changes.percent.hour + '%';
            day_change[2].value = result.changes.percent.day + '%';
            week_change[2].value = result.changes.percent.week + '%';
            month_change[2].value = result.changes.percent.month + '%';
        });
          dolar[2].addEventListener('change',  function(){
            switch_in[2].classList.add('power');
            switch_in[2].classList.remove('off');
            toggle[2].style.background = "#b0b1b2";
            hour_change[2].value = '$' + result.changes.price.hour;
            day_change[2].value = '$' + result.changes.price.day;
            week_change[2].value = '$' + result.changes.price.week;
            month_change[2].value = '$' + result.changes.price.month;
        });
     
    }).catch(function (err) {
      console.log('err', err)
    })
	

});

>>>>>>> 0b41513ca72598e833021089415b62178bc198a5
