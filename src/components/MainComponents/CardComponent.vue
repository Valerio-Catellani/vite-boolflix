<template>
    <div class="film-card" @click="flipCard">
        <div class="card-background" :class="{ flipped: isFlipped }">
            <div class="front img-container">
                <img class="img-fluid h-100" :src="info.image" :alt="info.title">
            </div>
            <div class="back">
                card-back Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio qui rem minima nam, eveniet
                reiciendis iste veritatis illum, consectetur numquam ducimus officiis eos repudiandae suscipit itaque
                aliquid debitis perferendis placeat distinctio unde? Fugiat voluptatibus sint vel quidem iste autem
                commodi accusantium labore sed necessitatibus! Omnis iure maiores, modi libero hic, ea ipsa laudantium
                natus ad quod amet dicta nam doloremque obcaecati velit! Doloribus nisi voluptatibus ipsum provident sit
                corporis mollitia, at quod deserunt culpa fugiat quis tenetur, molestias blanditiis nostrum saepe
                voluptate dicta rem. Ad ullam saepe, eos architecto corrupti, mollitia tenetur eligendi id rem beatae,
                odit quibusdam expedita obcaecati?
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: ['info'],
    data() {
        return {
            isFlipped: false
        };
    },
    methods: {
        flipCard() {
            this.isFlipped = !this.isFlipped;
        }
    }
}
</script>


<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

.film-card {
    width: 250px;
    height: 400px;
    cursor: pointer;
    perspective: 1000px; // Aggiungi una prospettiva per l'effetto 3D
}

.card-inner {
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease; // Aggiungi una transizione per l'effetto di flip con una funzione di easing
    transform-style: preserve-3d; // Assicura che gli elementi figlio rispettino la prospettiva
}

.flipped .card-inner {
    transform: rotateY(180deg); // Ruota la carta quando è "flippata"
}

.front,
.back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden; // Nasconde la faccia posteriore durante il flip
}

.back {
    transform: rotateY(180deg); // Inizialmente mostra la parte posteriore della carta
}
</style>