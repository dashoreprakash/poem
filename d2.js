// var flag=0;
// document.querySelector("#top-btn").addEventListener("click",function(){
//     document.querySelector("#top").style.display="none";
//     document.querySelector("#top-video").style.display="none";



    
    



// })
document.querySelector(".btn2").addEventListener("click",function(){
    document.querySelector(".ri-arrow-left-s-line").style.display="none";
    document.querySelector(".ri-bookmark-line").style.display="none";

    gsap.to(".booking",{
        y:-265,
        delay:.1,
        duation:5,
    
    
    });
    
    gsap.to(".overly",{
        duation:3,
        y:"-110%"

    
    
    })
    gsap.to("#btn2",{
        display:"initial",
        duation:3,
        delay:.3,
        y:-1

    
    
    })
    gsap.to(".booking",{
        y:-270,
        delay:.1,
        duation:5,
    
    
    });
    
    gsap.to(".overly",{
        duation:3,
        y:"-100%"

    
    
    })
    gsap.to("#btn2",{
        display:"initial",
        duation:3,
        delay:.3,
        y:-1

    
    
    })
    gsap.to(".inner",{
        duation:3,
        y:"-15%"

    
    
    })

    // if(flag===0){
       
    //     flag++;

    // }
    // else{
    //     gsap.to(".booking",{
    //         y:0,
    //         delay:.1,
    //         duation:5,
        
        
    //     });
        
    //     gsap.to(".overly",{
    //         duation:3,
    //         y:"0%",
    //         delay:.3
    
        
        
    //     })
    //     gsap.to(".inner",{
    //         duation:3,
    //         y:"0%"
    
        
        
    //     })

    // }
   

});
document.querySelector("#btn2").addEventListener("click",function(){
    document.querySelector(".ri-arrow-left-s-line").style.display="initial";
    document.querySelector(".ri-bookmark-line").style.display="initial";
    document.querySelector("#btn2").style.display="none";

    gsap.to(".booking",{
                y:0,
                delay:.1,
                duation:5,
            
            
            });
            
            gsap.to(".overly",{
                duation:3,
                y:"0%",
                delay:.3
        
            
            
            })
            gsap.to(".inner",{
                duation:3,
                y:"0%"
        
            
            
            })

})




document.querySelector("#btn3").addEventListener("click",function(){
    gsap.to(".popup",{
        scale:"1"
    })
    


})








document.querySelector("#popup-btn").addEventListener("click",function(){
    document.querySelector(".popup").style.display="none";
    
    



})