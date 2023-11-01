function showPrimeNumbers()
{
    let maxValue = document.getElementById('numberInput').value;

    let rowOfPrimeNumbers = new String();
    for(let i = 0; i < maxValue; i++)
    {
        if(isPrime(i))
            rowOfPrimeNumbers += + i + ", ";
    }
    document.getElementById('resultLabel').textContent = rowOfPrimeNumbers;
}

function checkPrimeNumbers()
{
    let number = document.getElementById('numberInput').value;
    document.getElementById('resultLabel').textContent = 'The number is ' + (isPrime(number) ? '' : 'not ') + 'prime';
}

function isPrime(num)
{

    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

