# feedme




//
// const key = "424c7d6f21546c80656b31951135c75"
// const url = "https://api.meetup.com/2/open_events?&key=" + key
//meetup : url: url + "&zip=10016&city=New+York&topic=" +input + "&text="+ input+ "&state=ny&photo-host=public",

//

// $.getJSON( url + "&zip=10016&and_text=False&offset=0&city=New+York&format=json&limited_events=False&topic=" +input + "&text="+ input+ "&state=ny&photo-host=public&page=20&radius=25.0&desc=False&status=upcoming",
//       (response)=>{
//         debugger
//         Store.data.push(response)
//       }
//     )

// const req = new XMLHttpRequest()
// req.addEventListener("load", (function(event,data){
//   var data = JSON.parse(this.responseText)
// }));
// req.open("GET", url + "&zip=10016&and_text=False&offset=0&city=New+York&format=json&limited_events=False&topic=" +input + "&text="+ input+ "&state=ny&photo-host=public&page=20&radius=25.0&desc=False&status=upcoming" )
// req.send()


// const url = "http://food2fork.com/api/search?key="
// const key = "e642ca2fb63e3b42445e7c2acf799fa8"
//
// $.ajax({
//   // url: url + key + "&q=" + input + "&count=6" + "&callback=jsonp",
//   url:"https://api.meetup.com/2/open_events?callback=?&sign=true&key=424c7d6f21546c80656b31951135c75&zip=10016&and_text=False&offset=0&city=New+York&format=json&limited_events=False&topic=Javascript+&text=Javascript&state=ny&photo-host=public&page=20&radius=25.0&desc=False&status=upcoming",
//   dataType:'jsonp'}
// ) .done((response)=>{
//
//   debugger
// })




// ${url}${key}&q=${input}&count=6
//


//     fetch(url + "&zip=10016&and_text=False&offset=0&city=New+York&format=json&limited_events=False&topic=" +input + "&text="+ input+ "&state=ny&photo-host=public&page=20&radius=25.0&desc=False&status=upcoming",
// {mode: 'no-cors'}).then(
//     (res) =>  {
//       debugger
//       const final = function grc(){
//         return res.json()}
//       }
//     )
