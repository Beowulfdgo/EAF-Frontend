<template>
<div>
    Reproducir MP3
    <button @click="play">
        Play/Pause
    </button>
    <div id="wave"></div>
    <LecturaEAF :tiempo_parametro=tiempo_reproduciendo :longitud_tiempo=tiempo_longitud @mensaje_scroll="player_mensaje_scroll"></LecturaEAF>
</div>
</template>

<script>
import WaveSurfer from "wavesurfer.js";

export default {
    name: "ReproduceEAF",
    data: function () {
        return {
            count: 0,
            currentTime: "0:00",
            tiempo_reproduciendo: "0",
            timeInterval: null,
            tiempo_longitud: "0"
        }
    },
    created() {

    },
    mounted() {
        this.wavesurfer = WaveSurfer.create({
            container: "#wave"
        });
        this.wavesurfer.load("/eaf/asset01.mp3");
        //this.wavesurfer.load("https://ia800301.us.archive.org/15/items/fire_and_ice_librivox/fire_and_ice_frost_apc_64kb.mp3");

        this.wavesurfer.on("ready", () => {
            //this.wavesurfer.play();  
            this.tiempo_longitud = Math.trunc(this.wavesurfer.getDuration())
            console.log("ñññññññññ el tiempo duracion " + this.tiempo_longitud)

        })
    },
    beforeDestroy() {
        this.wavesurfer.destroy()
    },
    methods: {
        player_mensaje_scroll(tiempo) {
            //https://medium.com/js-dojo/component-communication-in-vue-js-ca8b591d7efa
            console.log("Este es un mensaje el scroll " + tiempo)
            this.playtiempo(tiempo)
        },
        timeDisplay(time) {
            // Hours, minutes and seconds
            let hrs = Math.floor(time / 3600);
            let mins = Math.floor((time % 3600) / 60);
            let secs = Math.floor(time % 60);
            // Output like "1:01" or "4:03:59" or "123:03:59"
            let output = '';
            if (hrs > 0) {
                output += '' + hrs + ':' + (mins < 10 ? '0' : '');
            }
            output += '' + mins + ':' + (secs < 10 ? '0' : '');
            output += '' + secs;
            //console.log("TTTTTTTTTTTTTTTT tiempoTTTTTTTtt " + time)
            return output;
        },

        updateTimer() {
            var formattedTime = Math.trunc(this.wavesurfer.getCurrentTime());
            //console.log("Tiempo "+ formattedTime)
            this.tiempo_reproduciendo = formattedTime;
            return formattedTime;
        },
        playtiempo(tiempo) {
            //console.log("tiempo player" + tiempo)
            //this.wavesurfer.playPause()
            this.wavesurfer.play(tiempo)
            //this.wavesurfer.on('audioprocess', tiempo);

        },
        play() {
            //this.wavesurfer.playPause()
            this.timeInterval = setInterval(() => {
                this.currentTime = this.timeDisplay(this.wavesurfer.getCurrentTime())
            }, 1000);
            this.wavesurfer.playPause()

            this.wavesurfer.on('audioprocess', this.updateTimer);
            console.log("imprime current time wavesurfer " + this.wavesurfer.getCurrentTime())
            console.log("imprime current time " + this.currentTime)
            console.log("Imprime intervalo " + this.timeInterval)
            console.log("--------------")
            console.log("el tiempo repro" + this.updateTimer());

        }
    }
};
</script>
