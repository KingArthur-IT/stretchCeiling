// const response = fetch('../csv/swgshop_export_full_price_qty.csv')
//    .then(response => response.text())
//    .then(data => {
//        let result = data.split(/\r?\n|\r/).map(e => {
//            return e.split(",")
//        })
//        result.forEach(e => {
//            let m = e.map(e => {
//                return `<td>${e}</td>`
//            }).join("")
//            let ce = document.createElement('tr');
//            ce.innerHTML = m;
//            document.querySelector('table').appendChild(ce);
//        })
//    })

document.addEventListener('DOMContentLoaded', () => {
   fetch('https://kingarthur-it.github.io/stretchCeiling/csv/csvjson.json')
      .then(response => response.json())
      .then(data => {
         data.forEach(e => {
            let vals = Object.values(e);
            let row = `
               <td>${vals[2]}</td>
               <td>${vals[3]}</td>
               <td>${vals[1]}</td>
               <td>${vals[7]}</td>
            `
            let ce = document.createElement('tr');
            ce.innerHTML = row;
            document.querySelector('table').appendChild(ce);
         });
      })
})