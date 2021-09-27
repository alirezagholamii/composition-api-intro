import { ref, onMounted } from 'vue'

export default function useFetchUsers() {
    const originalList = ref([]);

    const fetchUsers = async () => {
        try {
            const result = await fetch("https://part-quiz-app.herokuapp.com/users");
            originalList.value = await result.json()
        } catch (e) {
            console.log("Error ---> ", e);
        }
    }
    onMounted(fetchUsers)

    return {
        originalList
    }


}