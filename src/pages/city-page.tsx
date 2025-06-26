import WeatherSkeleton from '@/components/loading-skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import CurrentWeather from '@/components/ui/current-weather';
import FavoriteButton from '@/components/ui/favorite-button';
import HourlyTemperature from '@/components/ui/hourly-temperature';
import WeatherDetails from '@/components/ui/weather-details';
import WeatherForcast from '@/components/ui/weather-forcast';
import { useForecastQuery, useWeatherQuery } from '@/hooks/use-weather';
import { AlertTriangle } from 'lucide-react';
import { useParams, useSearchParams } from 'react-router-dom';

const CityPage = () => {
  const [searchParams]=useSearchParams();
  const params=useParams();
  const lat=parseFloat(searchParams.get("lat")||"0");
  const lon=parseFloat(searchParams.get("lon")||"0");
  const coordinates={lat,lon};
  const weatherQuery=useWeatherQuery(coordinates);
  const forcastQuery=useForecastQuery(coordinates);
  if (weatherQuery.error|| forcastQuery.error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className='h-4 w-4'></AlertTriangle>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Failed to load weather data. Please try again.</p>
          
        </AlertDescription>
      </Alert>
    );
  }
    if(!weatherQuery.data|| !forcastQuery.data||!params.cityName){
      return <WeatherSkeleton/>
    }
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">{params.cityName}, {weatherQuery.data.sys.country}</h1>
        <div>
          <FavoriteButton data={{...weatherQuery.data,name:params.cityName}}/>
        </div>
        
      </div>

      <div className="grid gap-6 w-full" >
        <div className="flex flex-col  gap-4 ">
          <CurrentWeather data={weatherQuery.data} />
          <HourlyTemperature data={forcastQuery.data}/>
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          <WeatherDetails data={weatherQuery.data} />
          <WeatherForcast data={forcastQuery.data}/>
        </div> 
      </div>
     
    </div>
  )
}

export default CityPage;
