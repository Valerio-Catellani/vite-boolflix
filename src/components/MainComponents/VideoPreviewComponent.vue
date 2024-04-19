<template>
    <div class="wrapper p-5">
        <div class="d-flex container  ">
            <div class="highlight-info text-white d-flex justify-content-end  flex-column">
                <h2 class="mine-main-color mine-text-shadow display-3 fw-bold mb-3"> titolo </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat facilis odit autem, tenetur
                    laborum dolore iste at consequatur natus. Maiores voluptates nulla ipsam, saepe deserunt iure?
                    Nesciunt aliquam, cupiditate quaerat eos modi veniam facere iusto perspiciatis, incidunt atque
                    neque. Possimus accusantium quos velit nemo dolore provident amet, fuga rerum nihil nisi.
                    Laudantium, iusto voluptates distinctio dicta totam facilis ipsa qui voluptas repudiandae laborum!
                    Incidunt quod veritatis earum itaque, dolor, blanditiis fuga exercitationem totam eum quis, magni
                    iste quisquam ad. Quo commodi incidunt officia consequuntur vitae placeat quasi temporibus tempore,
                    rerum ullam amet cupiditate nesciunt blanditiis expedita? Magni sed fugiat esse.</p>
                <h6 class="mb-4 pb-2">Popularity : 100</h6>
                <div class="d-flex align-items-center ">
                    <button class="btn btn-mine hover-size text-white p-3 me-5">More Information</button>
                    <div class="icon-container rounded-circle btn-mine hover-size" style="width: 50px; height: 50px;"
                        role="button">
                        <i
                            class="fa-solid fa-plus display-6 fw-bold w-100 h-100 d-flex align-items-center justify-content-center"></i>
                    </div>
                </div>

            </div>
            <div class="h-100 d-flex flex-column justify-content-between align-items-center ">
                <div class="border-video d-flex align-items-center justify-content-center overflow-hidden"
                    style="height: 500px;">
                    <div class="left-border-gradient h-100"></div>
                    <iframe width="760" height="615"
                        src="https://www.youtube.com/embed/J-GWW9LIOb0?si=7WVdVnX7WPoDjXed&amp;controls=0&autoplay=1&loop=1&rel=0&end=30&showinfo=0&modestbranding=1"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                    <div class="right-border-gradient h-100"></div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoPreviewComponent',

    // J-GWW9LIOb0
    methods: {


    },
    created() {
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

.wrapper {
    background-color: $jumbo-color;
    margin-top: -10px;
    box-shadow: 0 0 15px $main-red-color;
}

.highlight-info {
    width: 35%;
}

.left-border-gradient {
    background-image: linear-gradient(-90deg, rgba(0, 0, 0, 0.9640231092436975) 1%, rgba(80, 80, 80, 0) 78%);
    width: 50px;
}

.right-border-gradient {
    background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.9640231092436975) 1%, rgba(80, 80, 80, 0) 78%);
    width: 50px;
}



.border-video {}
</style>