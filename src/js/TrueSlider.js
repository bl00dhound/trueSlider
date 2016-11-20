/**
 * Created by alex on 20.11.16.
 */
function TrueSlider(options) {
    var slider = document.querySelector("[data-slider='slider']");
    var items = slider.querySelectorAll(".slider_item");
    var position = options.position || 0;


    slider.style.height = items[0].clientHeight + 'px';

    items.forEach(function(element, index, arr) {
        if (index === position) {
            element.classList.add('show');
            return;
        }
        element.classList.add('hidden');
    });

     function move(destination) {
        if (destination === position) return;
        if (position < destination) {
            var dest = items[destination].classList;
            var current = items[position].classList;

            dest.add('right');
            dest.remove('hidden');
            dest.add('show');





            console.log([dest, current]);
        }
    }

   move(5);

}