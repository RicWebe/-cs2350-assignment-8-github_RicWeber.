//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
import {photos} from './photos'

for(let m of photos) {
    let m_thumb = document.getElementById('m' + m.id)
    m_thumb.innerHTML = `
        <img src="${m.poster}" alt= "${m.title}" class="img-thumbnail"/>`

        m_thumb.onclick=function(){
            displayPhoto(m)
        }

}

let featured_photo = document.querySelector(".featured")
function displayPhoto(photo){
    featured_photo.innerHTML= `
    <div class="card">
            <div class="card-header">${photo.title}</div>
            <img src = "${photo.poster}" class="card-img-top" alt="${photo.title}"/>
            <div class="card-body">
              <p class="card-text">${photo.plot}</p>
            </div>
            
    </div>
  `
}



 


  /*function searchPhotos (event){
    event.preventDefault()
  
    let input = document.querySelector('[type="search"]').value|| ""
    let count = 0
    for(let m of photos){
      if(m.title.toUpperCase().indexOf(input.toUpperCase()) ==-1 ){
        document.querySelector('#m4{m.id}').classList.add('d-none')
      }else{
        document.querySelector('#m4{m.id}').classList.remove('d-none')
        count++
      }
    }
    featured_photo.innerHTML = count == 0 ? 'Nothing was found': ''
  } 
   document.querySelector("button").onclick = searchPhotos
  document.querySelector('[type="search"]').onsearch = searchPhotos
  document.querySelector("form").onsubmit = searchPhotos
  */