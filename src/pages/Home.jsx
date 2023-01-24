import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Hidden,
  IconButton,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import { ShoppingCartSharp } from "@mui/icons-material";

export default function Home() {
  const theme = useTheme();
  const [products, setProducts] = useState([]);
  async function fetchAllProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    setProducts(result);
  }

  useEffect(() => {
    fetchAllProducts();

    return () => {};
  }, []);
  //sx is spacing and py is padding in 8 px in Y direction , container is a default container
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {products.map(({ title, id, price, description, rating, image }) => (
          <Grid item key={id} xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                objectFit: "contain",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  alignSelf: "center",
                  width: theme.spacing(30),
                  height: theme.spacing(30),
                  pt: theme.spacing(),
                  objectFit: "contain",
                }}
                image={image}
                alt={title}
              ></CardMedia>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    "-webkit-line-clamp": "1",
                    "-webkit-box-orient": "vertical",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  color="text.secondary"
                  paragraph
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    "-webkit-line-clamp": "2",
                    "-webkit-box-orient": "vertical",
                  }}
                >
                  {description}
                </Typography>
                <Typography fontSize="large" paragraph>
                  {price}
                </Typography>
                <Rating readOnly precision={0.5} value={rating.rate} />
              </CardContent>
              <CardActions sx={{ alignSelf: "center " }}>
                <Button variant="contained">
                  <ShoppingCartSharp /> ADD TO CART
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
