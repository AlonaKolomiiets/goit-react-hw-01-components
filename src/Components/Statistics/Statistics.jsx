import React from "react";
import PropTypes from "prop-types";
import { SectionStatistics } from "./Statistics.slyled";
import { ListItem } from "./Statistics.slyled";
import { List } from "./Statistics.slyled";
import { FirstFont } from "./Statistics.slyled";

const Statistics = ({ title, stats }) => {
  const filteredArr = stats.reduce((uniqueStats, currentStat) => {
    const comparisonLabel = uniqueStats.find(
      (stat) => stat.label === currentStat.label
    );
    if (!comparisonLabel) {
      uniqueStats.push({ ...currentStat });
    } else {
      comparisonLabel.percentage += currentStat.percentage;
    }
    return uniqueStats;
  }, []);
  return (
    <SectionStatistics className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <List className="stat-list">
        {filteredArr.map((stat) => (
          <ListItem className="item" key={stat.label}>
            <FirstFont className="label">{stat.label}</FirstFont>
            <FirstFont className="percentage">{stat.percentage}</FirstFont>
          </ListItem>
        ))}
      </List>
    </SectionStatistics>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
Statistics.defaultProps = {
  title: "UPLOAD STATS",
};

//   title - не обязателен, и если он не передан, не должна рендериться разметка заголовка <h2>.
// stats - массив объектов содержащих информацию о элементе статистики. Может иметь произвольное кол-во элементов.
// Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для генерации случайного цвета.
