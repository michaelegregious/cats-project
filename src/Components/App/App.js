import React, { Component, Fragment } from 'react';
import { Header, Grid, Container } from 'semantic-ui-react';
import CatCard from './../CatCard/CatCard';
import SortButtons from './../SortButtons/SortButtons';
import { connect } from 'react-redux';
import './App.css';
import { getCats, selectAllCats, sortCatsByLastWord } from '../../store';

class App extends Component {
  state = {
    areSorted: false,
    favorites: false
  };

  componentDidMount = () => {
    this.props.getCats();
  };

  handleSortClick = () => {
    this.setState({
      areSorted: () => !this.state.areSorted
    });
  };

  render = () => {
    let cats;
    if (this.state.areSorted) cats = this.props.sorted;
    else cats = this.props.cats;
    return !cats[0] ? (
      'Loading...'
    ) : (
      <div>
        <Header
          as="h1"
          content="Cat Facts!"
          style={style.h1}
          textAlign="center"
        />

        <Container>
          <SortButtons handleSortClick={this.handleSortClick} />
          <Grid columns={3}>
            {cats.map(cat => (
              <Fragment key={cat.id}>
                <Grid.Column>
                  <CatCard img={cat.imgUrl} fact={cat.fact} />
                </Grid.Column>
              </Fragment>
            ))}
          </Grid>
        </Container>
      </div>
    );
  };
}

const mapState = state => ({
  cats: selectAllCats(state),
  sorted: sortCatsByLastWord(state)
});

const mapDispatch = dispatch => ({
  getCats: () => {
    dispatch(getCats());
  }
});

const style = {
  h1: {
    padding: '1.5em 0em'
  }
};

export default connect(
  mapState,
  mapDispatch
)(App);
