import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";

class item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };
  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        <Title>
          <Link href={{
            pathname: '/item',
            query: { id: item.id }
          }}>
            {item.title}
          </Link>
        </Title>
      </ItemStyles>
    );
  }
}

item.propTypes = {};

export default item;
