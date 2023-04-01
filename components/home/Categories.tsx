import { ScrollView } from 'react-native';
import CategoryItem from './CategoryItem';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 10,
        paddingHorizontal: 10,
      }}
      className='mt-2'
    >
      <CategoryItem
        id="japanese"
        name="Japanese"
        imageUrl="https://picsum.photos/100"
      />
      <CategoryItem
        id="indonesian"
        name="Indonesian"
        imageUrl="https://picsum.photos/100"
      />
      <CategoryItem
        id="desert"
        name="Desert"
        imageUrl="https://picsum.photos/100"
      />
      <CategoryItem id="bar" name="Bar" imageUrl="https://picsum.photos/100" />
      <CategoryItem
        id="pizza"
        name="Pizza"
        imageUrl="https://picsum.photos/100"
      />
      <CategoryItem
        id="angkringan"
        name="Angkringan"
        imageUrl="https://picsum.photos/100"
      />
      <CategoryItem
        id="street-food"
        name="Street Food"
        imageUrl="https://picsum.photos/100"
      />
    </ScrollView>
  );
};

export default Categories;
