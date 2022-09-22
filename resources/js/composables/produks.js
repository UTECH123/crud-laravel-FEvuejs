import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';

export default function useProduks() {
    const Produks = ref([])
    const produk = ref([])
    const router = useRouter()
    const errors = ref('')

    const getProduks = async () => {
        let response = await axios.get('/api/Produks')
        Produks.value = response.data.data;
    }

    const getproduk = async (id) => {
        let response = await axios.get('/api/Produks/' + id)
        produk.value = response.data.data;
    }

    const storeproduk = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/Produks', data)
            await router.push({name: 'Produks.index'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const updateproduk = async (id) => {
        errors.value = ''
        try {
            await axios.put('/api/Produks/' + id, produk.value)
            await router.push({name: 'Produks.index'})
        } catch (e) {
            if (e.response.status === 422) {
               errors.value = e.response.data.errors
            }
        }
    }

    const destroyproduk = async (id) => {
        await axios.delete('/api/Produks/' + id)
    }


    return {
        Produks,
        produk,
        errors,
        getProduks,
        getproduk,
        storeproduk,
        updateproduk,
        destroyproduk
    }
}
