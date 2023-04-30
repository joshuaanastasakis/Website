import { onMounted, onUnmounted } from 'vue';

export const useScroll = (callback = () => {}) => {
    const handleScrolling = () => {
        const elements = [
            {name: "home", val: document.getElementById('home').getBoundingClientRect().y},
            {name: "about", val: document.getElementById('about').getBoundingClientRect().y},
            {name: "projects", val: document.getElementById('projects').getBoundingClientRect().y},
            {name: "contact", val: document.getElementById('contact').getBoundingClientRect().y},
        ]

        callback(elements);
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScrolling)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScrolling)
    })
}