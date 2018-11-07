document.addEventListener('DOMContentLoaded', function (e) {

    console.log('hi')

    // build a panel
    // function productText(section) {
    //     let sect = document.getElementById(section)
    //     console.log(sect)
    //     let sectData = data["products"][section]
    //     console.log(sectData)

    //     let price = sect.getElementsByClassName('price')[0]
    //     console.log(price)
    //     price.innerText = sectData.price

    //     let img = sect.getElementsByClassName('prod-img')[0]
    //     img.src = sectData.img_url

    //     let descript = sect.getElementsByClassName('descript')[0]
    //     descript.innerText = sectData.descript

    //     let brand = sect.getElementsByClassName('brand')[0]
    //     brand.innerText = sectData.brand
    // }

    // productText('one')
    // productText('three')
    // productText('five')

    function faq() {
        let sect = document.getElementsByClassName('questions-container')[0]
        console.log(data["faq"])

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


    // init GSAP controller

    // init GSAP controller
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    // pin email form to nav bar
    var pin = new ScrollMagic.Scene({
        triggerElement: '#test',
    }).setPin('#test', { pushFollowers: false });
    pin.setClassToggle('#test', 'nav-class');
    pin.addTo(controller);

    // show Toothbrush
    var showToothbrush = new ScrollMagic.Scene({
        triggerElement: '#two',
    })
    showToothbrush.setClassToggle('#toothbrush', 'display');
    showToothbrush.on("enter", () => changeBrand("toothbrush"));
    showToothbrush.on("leave", () => changeBrand("shoe"));
    showToothbrush.addTo(controller)

    // hide Shoe
    var hideShoe = new ScrollMagic.Scene({
        triggerElement: '#two',
    })
    hideShoe.setClassToggle('#shoe', 'hidden');
    hideShoe.addTo(controller)
  
    // show Lipstick
    var showLipstick = new ScrollMagic.Scene({
        triggerElement: '#four',
    })
    showLipstick.setClassToggle('#lipstick', 'display');
    showLipstick.on("enter", () => changeBrand("lipstick"));
    showLipstick.on("leave", () => changeBrand("toothbrush"));
    showLipstick.addTo(controller)

    // hideToothbrush
    var hideToothBrush = new ScrollMagic.Scene({
        triggerElement: '#four',
    })
    hideToothBrush.setClassToggle('#toothbrush', 'hidden');
    hideToothBrush.addTo(controller)


    function changeBrand(el) {
        let price = document.getElementById('price-tag')
        let factory = document.getElementById('factory')
        let brand = document.getElementById('from-brand')

        switch (el) {
            case "shoe":
                price.innerText = "$80"
                factory.innerText = "These shoes are made in the same factory as:"
                brand.innerText = "Nike"
                break;
            case "toothbrush":
                price.innerText = "$35"
                factory.innerText = "This toothbrush is made in the same factory as:"
                brand.innerText = "Quip"
                break;
            case "lipstick":
                price.innerText = "$20"
                factory.innerText = "This lipstick is made in the same factory as:"
                brand.innerText = "La Mer"
                break;
            default:
                price.innerText = "$80"
                factory.innerText = "These shoes are made in the same factory as:"
                brand.innerText = "Nike"
                break;
        }
    }



    //enter timeline 
    // var tl = new TimelineMax();
    // tl.to("#things", 1.5, { opacity: 1 });
    // tl.to("#prices", 1.5, { opacity: 1 });
    // tl.to("#brands", 1.5, { opacity: 1 });


   

})
