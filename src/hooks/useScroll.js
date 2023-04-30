import { onMounted, onUnmounted } from 'vue';

export const useScroll = (callback = () => {}) => {
    const handleScrolling = () => {
        // console.log("scrolling");
        const elements = [
            {name: "home", val: document.getElementById('home').getBoundingClientRect().y},
            {name: "about", val: document.getElementById('about').getBoundingClientRect().y},
            {name: "projects", val: document.getElementById('projects').getBoundingClientRect().y},
            {name: "contact", val: document.getElementById('contact').getBoundingClientRect().y},
        ]

        // for (let key in elements) {
        //     console.log(`elements[${key}] = ${Math.abs(elements[key])}`);
        // }

        callback(elements);
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScrolling)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScrolling)
    })
}