// Throttling Function
const throttleFunction = (func, delay) => {
			let prev = 0;
			return (...args) => {
				
				let now = new Date().getTime();
				// console.log(now - prev, delay);
				if (now - prev > delay) {
					prev = now;
					return func(...args);
				}
			}
}

var imagesclutter = [
    {dp:"https://images.unsplash.com/photo-1709593491550-1f92cda74017?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8", id:0},
    {dp:"https://images.unsplash.com/photo-1709525091803-7d73b3d5f814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8", id:1},
    {dp:"https://images.unsplash.com/photo-1709595036432-18603869e689?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D", id:2},
    {dp:"https://images.unsplash.com/photo-1709480919018-5e33592a2d8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D", id:3},
    {dp:"https://images.unsplash.com/photo-1704559920243-ef2b536da968?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D", id:4},
    {dp:"https://images.unsplash.com/photo-1709633694594-30f42ddbf669?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D", id:5},
    {dp:"https://images.unsplash.com/photo-1709532696583-b19c20ed2894?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D", id:6},
    {dp:"https://images.unsplash.com/photo-1558486012-817176f84c6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D", id:7},
    {dp:"https://images.unsplash.com/photo-1709168566252-31282eac8ac5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D", id:8},
    {dp:"https://images.unsplash.com/photo-1595438223604-cb7ad8a6284b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D", id:9}
]
// console.log();

function throttlingeffectondiv(){

    var container = document.querySelector("#container");
    container.addEventListener("mousemove",
    throttleFunction((dets) => {
    // console.log(dets.clientX);
        var div = document.createElement("div");
        div.classList = "throttlediv";
        // console.log(div);
        container.appendChild(div);
        var containerlocation = container.getBoundingClientRect();
        
        div.style.left = `${dets.clientX - containerlocation.left}px`;
        div.style.top = `${dets.clientY - containerlocation.top}px`;
        div.style.transform = "translate(-50%,-50%)";

        var img = document.createElement("img");
        img.classList = "images";
        img.setAttribute("src",`${imagesclutter[Math.floor(Math.random()*10)].dp}`);
        div.appendChild(img);

        var tl = gsap.timeline();
        tl.to(img,{
            y:0,
            ease: Power1,
            duration: .8

            
        })
        tl.to(img,{
            y:"100%",
            ease: Power1,
            duration: .4

        })

       




        setTimeout(function(){
            div.remove();
        },1200)

       

        
    }, 250));
    





}




throttlingeffectondiv();



















