import React from "react";
import { Card } from "antd";
import { favoritar, removerFavorito } from "../utils/favoritos";
import { useSelector } from "react-redux";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";

const ItemCard = ({ item }) => {
  const { favoritos } = useSelector((s) => s.common);
  const dispatch = useDispatch();
  return (
    <Card
      actions={[
        favoritos.find((it) => it.id === item.id) ? (
          <FaHeart onClick={() => removerFavorito(item, dispatch)} />
        ) : (
          <FaRegHeart onClick={() => favoritar(item, dispatch)} />
        ),
      ]}
      cover={
        <img
          data-testid="image"
          alt="example"
          src={item.owner ? item.owner.avatar_url : item.avatar_url}
        />
      }
    >
      {item.owner ? (
        <>
          <h3>
            <a
              data-testid="repositoryName"
              href={item.html_url}
              target="_blank"
            >
              {item.name}
            </a>
          </h3>
          <p>
            <a
              data-testid="username"
              href={item.owner.html_url}
              target="_blank"
            >
              {item.owner.login}
            </a>
          </p>
        </>
      ) : (
        <p>
          <a data-testid="username" href={item.html_url} target="_blank">
            {item.login}
          </a>
        </p>
      )}
    </Card>
  );
};

export default ItemCard;
