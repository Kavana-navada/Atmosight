import type { WeatherData } from '@/api/types'
import useFavorite from '@/hooks/use-favorite'
import React from 'react'
import { Button } from './button'
import { Star } from 'lucide-react'
import { toast } from 'sonner'
interface FavoriteButtonProps{
    data:WeatherData
}

const FavoriteButton = ({data}:FavoriteButtonProps) => {
const {addToFavorite,removeFavorite,isFavorite}=useFavorite();
const isCurrentlyFavorite=isFavorite(data.coord.lat,data.coord.lon);
const handleToggleFav=()=>{
    if(isCurrentlyFavorite){
        removeFavorite.mutate(`${data.coord.lat}-${data.coord.lon}`);
        toast.error(`Removed ${data.name} from Favorites`)
    }else{
        addToFavorite.mutate({
            name:data.name,
            lat:data.coord.lat,
            lon:data.coord.lon,
            country:data.sys.country
        })
        toast.success(`Added ${data.name} to Favorites`)

    }
}
  return (
    <Button
    variant={isCurrentlyFavorite?"default":"outline"} size={"icon"} className={isCurrentlyFavorite?"bg-yellow-500 hover:bg-yellow-600":""} onClick={handleToggleFav}>
        <Star className={`h-4 w-4 ${isCurrentlyFavorite?"fill-current":""}`}/>
    </Button>
    
  )
}

export default FavoriteButton
