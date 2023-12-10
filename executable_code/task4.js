/*fetch('https://api.nbrb.by/exrates/currencies')
  .then(response => response.json())
  .then(data => {
      const select = document.getElementById('currency-dropdown');
      data.forEach(currency => {
          const option = document.createElement('option');
          option.value = currency.Cur_ID;
          option.text = currency.Cur_Name;
          select.appendChild(option);
      });
  })*/

  var uri = 'https://api.nbrb.by/';

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mode').addEventListener('change', function() {
        document.getElementById('res').innerHTML = '';
        switch (document.getElementById('mode').value) {
            case '0':
                document.getElementById('onDate').style.display = 'none';
                document.getElementById('Cur').style.display = 'none';
                document.getElementById('period').style.display = 'none';
                break;
            case '1':
                document.getElementById('onDate').style.display = 'none';
                document.getElementById('Cur').style.display = 'block';
                document.getElementById('period').style.display = 'none';
                break;
            case '2':
            case '10':
            case '11':
                document.getElementById('onDate').style.display = 'block';
                document.getElementById('Cur').style.display = 'block';
                document.getElementById('period').style.display = 'none';
                break;
            case '6':
            case '8':
            case '9':
                document.getElementById('onDate').style.display = 'none';
                document.getElementById('Cur').style.display = 'block';
                document.getElementById('period').style.display = 'none';
                break;
            case '3':
                document.getElementById('onDate').style.display = 'none';
                document.getElementById('Cur').style.display = 'block';
                document.getElementById('period').style.display = 'block';
                break;
            case '4':
            case '5':
                document.getElementById('onDate').style.display = 'block';
                document.getElementById('Cur').style.display = 'none';
                document.getElementById('period').style.display = 'none';
                break;
            case '7':
                document.getElementById('onDate').style.display = 'none';
                document.getElementById('Cur').style.display = 'none';
                document.getElementById('period').style.display = 'none';
                break;
        }
    });
 
    document.getElementById('btn').addEventListener('click', function() {
        document.getElementById('res').innerHTML = '';
        document.getElementById('btn').disabled = true;
        switch (document.getElementById('mode').value) {
            case '0':
                currencies();
                break;
            case '1':
                currency();
                break;
            case '2':
                rate(0);
                break;
            case '3':
                ratedyn();
                break;
            case '4':
                rates(0);
                break;
            case '5':
                rates(1);
                break;
            case '6':
                ratetoday(0);
                break;
            case '7':
                ratestoday(0);
                break;
            case '8':
                ratetoday(1);
                break;
            case '9':
                ratetoday(2);
                break;
            case '10':
                rate(1);
                break;
            case '11':
                rate(2);
                break;
        }
    });
 });
 
  
  function currencies() {
     fetch(uri + 'ExRates/Currencies')
         .then(response => response.json())
         .then(data => {
             var res = document.getElementById('res');
             data.forEach(item => {
                 var li = document.createElement('li');
                 li.textContent = JSON.stringify(item);
                 res.appendChild(li);
             });
             document.getElementById('btn').disabled = false;
         })
         .catch(err => {
             document.getElementById('btn').disabled = false;
             alert('ошибка');
         });
  }

  function currency() {
    fetch(uri + 'ExRates/Currencies/' + document.getElementById('iCur').value)
        .then(response => response.json())
        .then(data => {
            var res = document.getElementById('res');
            var li = document.createElement('li');
            li.textContent = JSON.stringify(data);
            res.appendChild(li);
            document.getElementById('btn').disabled = false;
        })
        .catch(err => {
            document.getElementById('btn').disabled = false;
            alert('ошибка');
        });
  }
  
  function parseRuDate(s) {
     var parts = s.split('.');
     if (parts.length != 3) return NaN;
  
     parts[0] = parseInt(parts[0], 10);
     parts[1] = parseInt(parts[1], 10);
     parts[2] = parseInt(parts[2], 10);
  
     if (isNaN(parts[0]) || isNaN(parts[1]) || isNaN(parts[2])) return NaN;
     if (parts[0] < 0 || parts[1] < 0 || parts[2] < 0) return NaN;
  
     return new Date(parts[2], parts[1]-1, parts[0]);
  }
  
  function rates(p) {
     fetch(uri + 'ExRates/Rates', { 
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ 'onDate': parseRuDate(document.getElementById('iDate').value).toUTCString(), 'Periodicity': p })
     })
     .then(response => response.json())
     .then(data => {
         var res = document.getElementById('res');
         data.forEach(item => {
             var li = document.createElement('li');
             li.textContent = JSON.stringify(item);
             res.appendChild(li);
         });
         document.getElementById('btn').disabled = false;
     })
     .catch(err => {
         document.getElementById('btn').disabled = false;
         alert('ошибка');
     });
  }

  function ratestoday(p) {
    fetch(uri + 'ExRates/Rates', { 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'Periodicity': p })
    })
    .then(response => response.json())
    .then(data => {
        var res = document.getElementById('res');
        data.forEach(item => {
            var li = document.createElement('li');
            li.textContent = JSON.stringify(item);
            res.appendChild(li);
        });
        document.getElementById('btn').disabled = false;
    })
    .catch(err => {
        document.getElementById('btn').disabled = false;
        alert('ошибка');
    });
 }
 
 function rate(p) {
    fetch(uri + 'ExRates/Rates/' + document.getElementById('iCur').value, { 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'onDate': parseRuDate(document.getElementById('iDate').value).toUTCString(), 'ParamMode': p })
    })
    .then(response => response.json())
    .then(data => {
        var res = document.getElementById('res');
        var li = document.createElement('li');
        li.textContent = JSON.stringify(data);
        res.appendChild(li);
        document.getElementById('btn').disabled = false;
    })
    .catch(err => {
        document.getElementById('btn').disabled = false;
        alert('ошибка');
    });
 }
 
 function ratetoday(p) {
    fetch(uri + 'ExRates/Rates/' + document.getElementById('iCur').value, { 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'ParamMode': p })
    })
    .then(response => response.json())
    .then(data => {
        var res = document.getElementById('res');
        var li = document.createElement('li');
        li.textContent = JSON.stringify(data);
        res.appendChild(li);
        document.getElementById('btn').disabled = false;
    })
    .catch(err => {
        document.getElementById('btn').disabled = false;
        alert('ошибка');
    });
 }
 
 function ratedyn() {
    fetch(uri + 'ExRates/Rates/Dynamics/' + document.getElementById('iCur').value, { 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'startDate': parseRuDate(document.getElementById('ifrom').value).toUTCString(), 'endDate': parseRuDate(document.getElementById('ito').value).toUTCString() })
    })
    .then(response => response.json())
    .then(data => {
        var res = document.getElementById('res');
        data.forEach(item => {
            var li = document.createElement('li');
            li.textContent = JSON.stringify(item);
            res.appendChild(li);
        });
        document.getElementById('btn').disabled = false;
    })
    .catch(err => {
        document.getElementById('btn').disabled = false;
        alert('ошибка');
    });
 }