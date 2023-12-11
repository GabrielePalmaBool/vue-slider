/*

Creare un carosel usando VueJs

*/

//SVOLGIMENTO
const { createApp } = Vue;

createApp({

    data() {
        return {

            indexImg: 0,

            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    number: 0, 
                    note:'Svezia',
                    
                }, 
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    number: 1, 
                    note:'Ratchet & Clank',
                }, 
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    number: 2, 
                    note:'Fortnite',
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    number: 3, 
                    note:'Stray',
                }, 
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    number: 4, 
                    note:'Avengers',
                }
            ]
                
        }
    },
    methods: {

        changeNexImg: function () {

            this.indexImg --;

            console.log(this.indexImg);

            if(this.indexImg < 0){

                this.indexImg = this.slides.length - 1;
            }


        },

        changePrevImg: function () {

            this.indexImg ++;

            console.log(this.indexImg);

            if(this.indexImg > this.slides.length - 1){

                this.indexImg=0;
            }

        },
        
        changeRandImg: function () {
           
            let pippo = document.querySelector('img').innerHTML;
            console.log(pippo);
        }

    }

}).mount('#app');