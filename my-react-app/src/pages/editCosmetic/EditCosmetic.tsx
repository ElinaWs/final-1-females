import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import type { ICosmeticShort } from "../../types"
import { axiosApi } from "../../axios"
import CosmeticForm from "../../components/cosmeticForm/cosmeticForm"

export const EditCosmetic = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [ cosmetic, setCosmetic ] = useState<ICosmeticShort | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getCosmetic = async() => {
            try {
                const response = await axiosApi.get(`/cosmetics/${id}.json`)
                setCosmetic(response.data)
            } catch (e) {
                console.log(e)
            }
          
        }
          if (id) {
                getCosmetic()
            }
    },[id])

    const handleEditCosmetic = async(editData: ICosmeticShort) => {
        try {
            setLoading(true);
            await axiosApi.put(`/cosmetics/${id}.json`, editData)
            navigate(`/cosmetic/${id}`)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false);
        }
    }
    return(
        <div>
            {
                cosmetic && <CosmeticForm 
                onSubmit={handleEditCosmetic} 
                cosmetic={cosmetic} 
                loading={loading}/>
            }
        </div>
    )
}
