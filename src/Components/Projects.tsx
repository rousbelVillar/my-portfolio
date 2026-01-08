import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const posts = [
  {
    title: "Exploring MUI Templates",
    subtitle: "Learn how to build modern UIs",
    img: "https://images.pexels.com/photos/35511524/pexels-photo-35511524.jpeg",
    link: "https://images.pexels.com/photos/25072344/pexels-photo-25072344.jpeg",
  },
  {
    title: "Tips for Better React UI",
    subtitle: "Make components reusable and beautiful",
    img: "https://images.pexels.com/photos/35511524/pexels-photo-35511524.jpeg",
    link: "https://images.pexels.com/photos/25072344/pexels-photo-25072344.jpeg",
  },
  // …add more posts
];

export default function BlogCards() {
  return (
    <Grid container spacing={4}>
      {posts.map((post) => (
        <Grid key={post.title} size={{ xs: 12, sm: 6, md: 4 }}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardMedia
              component="img"
              height="200"
              width="200"
              image={post.img}
              sx={{ objectFit: "cover" }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.subtitle}
              </Typography>
            </CardContent>
            <Button size="small" href={post.link}>
              Read More
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
