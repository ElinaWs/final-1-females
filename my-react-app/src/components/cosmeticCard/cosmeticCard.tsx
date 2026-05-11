import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import type { ICosmetic } from '../../types';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

interface Props {
    cosmetic: ICosmetic
}

export const CosmeticCard = ({ cosmetic }: Props) => {
    const navigate = useNavigate();

    const goToCosmeticPage = (id: string) => {
        navigate(`/cosmetic/${id}`)
    }
    return (
        <Card>
            <CardContent>
                <Typography>
                    {cosmetic.name}
                </Typography>
                <Typography variant='body2'>
                    Price:{cosmetic.price} $
                </Typography>

                <CardActions>
                    <Button onClick={() => goToCosmeticPage(cosmetic.id)}>
                        Show more
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}