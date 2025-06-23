import WeatherSkeleton from "@/components/loading-skeleton";
import { Button } from "@/components/ui/button";
import { useGeolocation } from "@/hooks/use-geolocation";
import { AlertTriangle, MapPin, RefreshCw } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useReverseGeocodeQuery } from "@/hooks/use-weather";

const WeatherDashboard = () => {
  const {
    coordinates,
    error: locationError,
    getLocation,
    isLoading: locationLoading,
  } = useGeolocation();

  const locationQuery=useReverseGeocodeQuery(coordinates);
  console.log(locationQuery)

  const handleRefresh = () => {
    getLocation();
    if (coordinates) {
      //reload
    }
  };
  if (locationLoading) {
    return <WeatherSkeleton />;
  }
  if (locationError) {
    return(
    <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4"/>
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

    if (coordinates) {
    return(
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
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My location</h1>
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={handleRefresh}
          //   disabled={}
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default WeatherDashboard;
