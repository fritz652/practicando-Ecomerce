import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 220 }}
        image={item.img}
        title="Imagen zapatilla"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body" color="text.secondary">
          S/.{item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">
          Ver detalle
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;