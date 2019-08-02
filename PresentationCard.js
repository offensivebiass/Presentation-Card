class PresentationCard extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.div = document.createElement('div')
        this.myName = ''
        this.itsMe = false
        this.myLastName = ''
        this.myEmail = ''
    }

    connectedCallback() {
        //console.log('view is visible')
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'nombre':
                this.myName = newValue
                if (newValue === 'Alex') {
                    this.itsMe = true
                    this.myName = newValue
                } else {
                    this.itsMe = false
                    this.myName = newValue
                }
                break
            case 'lastname':
                this.myLastName = newValue
                if(newValue === 'Frias'){
                    this.itsMe = true
                } else {
                    this.itsMe = false
                    this.myLastName = newValue
                }
                break
            case 'email':
                if (newValue.split('@')[1] === 'gmail.com') {
                    this.myEmail += 'soy parte de skynet'
                } else {
                    this.myEmail = 'mi correo es ' + newValue
                }
                break
        }
        this.drawCard()
    }

    drawCard() { 
        this.shadow.remove
        var finalString
        if(this.itsMe){
            finalString = 'Soy yo' + ', '  + this.myEmail
        } else {
            finalString = this.myName + ' ' + this.myLastName + ', ' + this.myEmail
        }
        
        this.div.textContent = finalString
        this.shadow.appendChild(this.div)
    }

    static get observedAttributes() {
        return ['nombre', 'lastname', 'email']
    }

}

customElements.define('presentation-card-jofd', PresentationCard);