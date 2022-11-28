import {useState} from "react";
import {useSelector} from "react-redux";
import {
    BOTH_MULTIPLIER,
    CAMERA_HOURS,
    CHAT_HOURS,
    COMPLEX_MULTIPLIER,
    DEVELOPMENT_MULTIPLIER,
    HOURLY_PRICE,
    IDEA_MULTIPLIER,
    INTERMEDIATE_MULTIPLIER,
    LANGUAGE_HOURS,
    LAUNCHED_MULTIPLIER,
    LOCATION_HOURS,
    PAYMENT_HOURS,
    PROFILE_HOURS,
    PROTOTYPE_MULTIPLIER,
    SIMPLE_MULTIPLIER,
    STREAMING_HOURS,
    VOICE_HOURS,
    WEB3_HOURS,
    WIREFRAME_MULTIPLIER,
} from "../utils/prices";

function useEstimator() {
    const data = useSelector(({DataSlice}) => DataSlice);

    const [isLoading, setIsLoading] = useState(true);
    const [projectEstimate, setProjectEstimate] = useState(0);
    const [totalHours, setTotalHours] = useState(0);

    const getFeaturesPrice = async () => {
        let total = 0;
        for await (const feature of data.features) {
            switch (feature) {
                case "Location":
                    total += HOURLY_PRICE * LOCATION_HOURS;
                    break;

                case "Languages":
                    total += HOURLY_PRICE * LANGUAGE_HOURS;
                    break;

                case "Camera":
                    total += HOURLY_PRICE * CAMERA_HOURS;
                    break;

                case "Profiles":
                    total += HOURLY_PRICE * PROFILE_HOURS;
                    break;
                case "Payments":
                    total += HOURLY_PRICE * PAYMENT_HOURS;
                    break;

                case "Streaming":
                    total += HOURLY_PRICE * STREAMING_HOURS;
                    break;

                case "Chat":
                    total += HOURLY_PRICE * CHAT_HOURS;
                    break;

                case "Web 3":
                    total += HOURLY_PRICE * WEB3_HOURS;
                    break;

                case "Voice":
                    total += HOURLY_PRICE * VOICE_HOURS;
                    break;

                default:
                    break;
            }
        }
        return total;
    };

    const getPlatformPrice = async currentEstimate => {
        switch (data.platform) {
            case "both":
                currentEstimate += currentEstimate * BOTH_MULTIPLIER;
                break;
            default:
                break;
        }
        return currentEstimate;
    };

    const getProgressPrice = async currentEstimate => {
        switch (data.progress) {
            case "Idea":
                currentEstimate *= IDEA_MULTIPLIER;
                break;
            case "Wireframe":
                currentEstimate *= WIREFRAME_MULTIPLIER;
                break;
            case "Prototype":
                currentEstimate *= PROTOTYPE_MULTIPLIER;
                break;
            case "Development":
                currentEstimate *= DEVELOPMENT_MULTIPLIER;
                break;
            case "Launched":
                currentEstimate *= LAUNCHED_MULTIPLIER;
                break;
            default:
                break;
        }
        return currentEstimate;
    };

    const getComplexityPrice = progressPrice => {
        switch (data.complexity) {
            case "Simple":
                progressPrice += progressPrice * SIMPLE_MULTIPLIER;
                break;
            case "Intermediate":
                progressPrice += progressPrice * INTERMEDIATE_MULTIPLIER;
                break;
            case "Complex":
                progressPrice += progressPrice * COMPLEX_MULTIPLIER;
                break;
            default:
                break;
        }
        return progressPrice;
    };

    const getEstimate = async () => {
        setIsLoading(true);

        let estimate = 0;
        estimate += await getFeaturesPrice();

        const platformPrice = await getPlatformPrice(estimate);

        const progressPrice = await getProgressPrice(platformPrice);

        const complexityPrice = await getComplexityPrice(progressPrice);

        const hours = complexityPrice / HOURLY_PRICE;

        setTotalHours(hours);
        setProjectEstimate(complexityPrice);

        setIsLoading(false);
    };

    return {
        isLoading,
        getEstimate,
        projectEstimate,
        totalHours,
    };
}

export default useEstimator;
