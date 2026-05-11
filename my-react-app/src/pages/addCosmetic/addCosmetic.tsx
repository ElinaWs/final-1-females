import { useState } from "react";
import CosmeticForm from "../../components/cosmeticForm/cosmeticForm"
import type { ICosmeticShort } from "../../types";
import { useNavigate } from "react-router";
import { axiosApi } from "../../axios";

export const AddCosmetic = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const onAddCosmeticClick = async (cosmeticData: ICosmeticShort) => {
        setLoading(true);
        try {
            await axiosApi.post('/cosmetics.json', cosmeticData);
        } finally {
            setLoading(false);
            navigate('/');
        }
    };

    return (
        <div>
            <CosmeticForm onSubmit={onAddCosmeticClick} loading={loading} />
        </div>
    )
}