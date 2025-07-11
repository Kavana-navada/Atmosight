import WeatherSkeleton from "@/components/loading-skeleton";
import { Button } from "@/components/ui/button";
import { useGeolocation } from "@/hooks/use-geolocation";
import { AlertTriangle, MapPin, RefreshCw } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useReverseGeocodeQuery, useWeatherQuery,useForecastQuery } from "@/hooks/use-weather";
import CurrentWeather from "@/components/ui/current-weather";
import HourlyTemperature from "@/components/ui/hourly-temperature";
import WeatherDetails from "@/components/ui/weather-details";
import WeatherForcast from "@/components/ui/weather-forcast";
import FavoriteCities from "@/components/ui/favorite-cities";

const WeatherDashboard = () => {
  const {
    coordinates,
    error: locationError,
    getLocation,
    isLoading: locationLoading,
  } = useGeolocation();

  const weatherQuery=useWeatherQuery(coordinates);
  const forcastQuery=useForecastQuery(coordinates);
  const locationQuery=useReverseGeocodeQuery(coordinates);

  const handleRefresh = () => {
    getLocation();
    if (coordinates) {
      weatherQuery.refetch();
      forcastQuery.refetch();
      locationQuery.refetch();
    }
  };
  if (locationLoading) {
    return <WeatherSkeleton />;
  }

  if (locationError) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Location Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>{locationError}</p>
          <Button variant={"outline"} onClick={getLocation} className="w-fit">
            <MapPin className="mr-2 h-4 w-4"></MapPin>
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if (!coordinates) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Location Required</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Please enable location acces to see your local weather</p>
          <Button variant={"outline"} onClick={getLocation} className="w-fit">
            <MapPin className="mr-2 h-4 w-4"></MapPin>
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  const locationName=locationQuery.data?.[0];
  console.log("name",locationName)
  if (weatherQuery.error|| forcastQuery.error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Failed to fetch weather data. Please try again.</p>
          <Button variant={"outline"} onClick={handleRefresh} className="w-fit">
            <RefreshCw className="mr-2 h-4 w-4"></RefreshCw>
            Retry
          </Button>
        </AlertDescription>
      </Alert>
    );
  }
  if(!weatherQuery.data || !forcastQuery.data){
    return <WeatherSkeleton />;
  }
  return (
    <div className="space-y-4">
      <FavoriteCities/>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My location</h1>
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={handleRefresh}
          disabled={weatherQuery.isFetching || forcastQuery.isFetching }
        >
          <RefreshCw className={`h-4 w-4 ${weatherQuery.isFetching?"animate-spin":""}`} />
        </Button>
      </div>

      <div className="grid gap-6 w-full" >
        <div className="flex flex-col lg:flex-row gap-4 ">
          <CurrentWeather data={weatherQuery.data} locationName={locationName}/>
          <HourlyTemperature data={forcastQuery.data}/>
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          <WeatherDetails data={weatherQuery.data} />
          <WeatherForcast data={forcastQuery.data}/>
        </div>
      </div>
     
    </div>
  );
};

export default WeatherDashboard;
