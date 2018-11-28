import React, { Component } from 'react';
import { arrayOf, node, string, shape } from 'prop-types';
import styles from './TabCard.scss';

class TabCard extends Component {
  state = {
    tabIndex: 0
  }

  renderTabs = () => {
    const { tabIndex } = this.state;
    const { tabs } = this.props;
    return tabs.map(({ title }, index) => (
      <div className={`${styles.tab} ${tabIndex === index ? styles.active : ''}`}>
        <button type="button" onClick={() => this.setState({ tabIndex: index })}>
          {title}
        </button>
        <div className={styles.indicator} />
      </div>
    ))
  }

  render() {
    const { tabIndex } = this.state;
    const { cardTitle, tabs } = this.props;

    const { tab } = tabs[tabIndex];

    return (
      <div className={styles.tabCard}>
        <p className={styles.title}>
          {cardTitle}
        </p>
        <div className={styles.tabs}>
          {this.renderTabs()}
        </div>
        <div className={styles.content}>
          {tab}
        </div>
      </div>
    );
  }
}

TabCard.propTypes = {
  cardTitle: string.isRequired,
  tabs: arrayOf(shape({
    title: string,
    tab: node
  })).isRequired
};

export default TabCard;
