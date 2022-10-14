import { Stack ,Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import Loader from './Loader';
const Videos = ({videos,direction }) => {
  if(videos.length===0) return <Loader />;

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item ,idx)=>(
        <Box key={idx}>
          {item.id.videoId&& <VideoCard  video={item}/>}
          {item.id.channelId&& <ChannelCard  channelDetail={item}/>}
        </Box>
      ))}
    </Stack>
  )
}
export default Videos