import { Listing } from "@/assets/interfaces/listing";
import { Stack } from "expo-router";
import { useMemo, useState } from "react";
import { View } from "react-native";
import listingsData from "../../assets/data/airbnb-listings.json";
import ExploreHeader from "../../components/ExploreHeader";
import Listings from "../../components/Listings";

export default function Index() {
  const [category, setCategory] = useState("Tiny homes");

  const items = useMemo(() => {
    // @ts-ignore - ts think listingData is {} instead of Listing[]
    return listingsData.filter((listing: Listing) => {
      return listing.medium_url !== undefined && listing.medium_url !== null;
    }) as Listing[];
  }, [listingsData]);

  const onCategoryChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 130 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onCategoryChanged} />,
        }}
      />
      <Listings category={category} listings={items} />
    </View>
  );
}
