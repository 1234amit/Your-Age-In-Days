//Age in Days
function ageInDays(){
    var birthYear = prompt("what year you were born..... Good friend?")
    var ageDays = (2020 - birthYear) * 365
    var h1 = document.createElement(h1)
    var textArea = document.createTextNode('You are ' + ageDays + ' days old')
    h1.setAttribute('id','ageInDays')
    h1.appendChild(textArea)
    document.getElementById('flex-box-result').appendChild(h1)
}
function reset(){
    document.getElementById('ageInDays').remove()
}