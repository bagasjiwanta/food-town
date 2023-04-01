import { ScrollView } from 'react-native';
import BannerItem from './BannerItem';

const Banners = () => {
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
      <BannerItem imageUrl='https://picsum.photos/720/180' id='test'/>
      <BannerItem imageUrl='https://picsum.photos/720/180' id='test'/>
      <BannerItem imageUrl='https://picsum.photos/720/180' id='test'/>
      <BannerItem imageUrl='https://picsum.photos/720/180' id='test'/>
      <BannerItem imageUrl='https://picsum.photos/720/180' id='test'/>
      <BannerItem imageUrl='https://picsum.photos/720/180' id='test'/>
    </ScrollView>
  )
}

export default Banners