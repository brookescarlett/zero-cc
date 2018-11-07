document.addEventListener('DOMContentLoaded', function (e) {

    function faq() {
        let sect = document.getElementsByClassName('questions-container')[0]

        let counter = 0
        while (counter < 4) {
            let div = document.createElement('div')
            div.className = 'faq-item-container'

            let q = document.createElement('p')
            q.className = "faq-sub-header"
            q.innerText = data["faq"][0]

            let a = document.createElement('p')
            a.className = "faq-body-type"
            a.innerText = data["faq"][1]

            div.appendChild(q)
            div.appendChild(a)
            sect.appendChild(div)

            counter++
        }
    }

    faq()
    
    // enter timeline 
    var enterTimeline = new TimelineMax()
    enterTimeline.to("#things", 1, { opacity: 1 })
    enterTimeline.to("#prices", 1, { opacity: 1 })
    enterTimeline.to("#brands", 1, { opacity: 1 })

    // init GSAP controller
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    })

    // pin email form to nav bar
    var pin = new ScrollMagic.Scene({
        triggerElement: '#test',
        offset: -10,
    }).setPin('#test')
    pin.setClassToggle('#test', 'nav-class')
    pin.addTo(controller)

    // show Toothbrush
    var showToothbrush = new ScrollMagic.Scene({
        triggerElement: '#two',
    })
    showToothbrush.setClassToggle('#toothbrush', 'display')
    showToothbrush.on("enter", () => changeBrand("toothbrush"))
    showToothbrush.on("leave", () => changeBrand("shoe"))
    showToothbrush.addTo(controller)

    // hide Shoe
    var hideShoe = new ScrollMagic.Scene({
        triggerElement: '#two',
    })
    hideShoe.setClassToggle('#shoe', 'hidden')
    hideShoe.on("progress", () => enterYTween())    
    hideShoe.addTo(controller)
  
    // show Lipstick
    var showLipstick = new ScrollMagic.Scene({
        triggerElement: '#four',
    })
    showLipstick.setClassToggle('#lipstick', 'display')
    showLipstick.on("enter", () => changeBrand("lipstick"))
    showLipstick.on("leave", () => changeBrand("toothbrush"))
    showLipstick.addTo(controller)

    // hideToothbrush
    var hideToothBrush = new ScrollMagic.Scene({
        triggerElement: '#four',
    })
    hideToothBrush.setClassToggle('#toothbrush', 'hidden')
    hideToothBrush.addTo(controller)


    function enterYTween() {
        TweenMax.fromTo(".section-three-sub-head", 1, { opacity: 0, y: 50 }, { opacity: 1, y: 0, delay: 1.5 })
        TweenMax.fromTo("#box-1", 1, { opacity: 0, y: 50 }, { opacity: 1, y: 0, delay: 2.5 })
        TweenMax.fromTo("#box-2", 1, { opacity: 0, y: 50 }, { opacity: 1, y: 0, delay: 3.5 })
    }


    function changeBrand(el) {
        let price = document.getElementById('price-tag')
        let factory = document.getElementById('factory')
        let brand = document.getElementById('from-brand')

        switch (el) {
            case "shoe":
                price.innerText = "$80"
                factory.innerText = "These shoes are made in the same factory as:"
                brand.innerText = "Nike"
                break
            case "toothbrush":
                price.innerText = "$35"
                factory.innerText = "This toothbrush is made in the same factory as:"
                brand.innerText = "Quip"
                break
            case "lipstick":
                price.innerText = "$20"
                factory.innerText = "This lipstick is made in the same factory as:"
                brand.innerText = "La Mer"
                break
            default:
                price.innerText = "$80"
                factory.innerText = "These shoes are made in the same factory as:"
                brand.innerText = "Nike"
                break
        }
    }


   

})
