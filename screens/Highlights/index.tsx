import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import AppText from '../../components/AppText';
import Header from '../../components/Headers/HighlightsHeader';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import styles from './styles';
import constants from '../../utils/constants';
import CategoryComparison from '../../components/CategoryComparison';
import TaskServices from '../../api/task';
import moment from 'moment';
import { useIsFocused } from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const BAR_COLORS = [
  () => constants.mediumPriority,
  () => constants.icon[1],
  () => constants.highPriority,
  () => constants.gradient,
];

interface ChartProps {
  title: string;
  chart: React.ReactNode;
}

const Highlights = () => {
  const isFocused = useIsFocused();
  //@ts-ignore
  const date = moment().format('DD-MM-YYYY');
  const [data, setData] = useState({
    labels: ['Sports', 'Study', 'Leisure', 'Other'], // optional
    datasets: [
      {
        data: [0, 0, 0, 0],
        colors: BAR_COLORS,
      },
    ],
  });
  const [loading, setLoading] = useState(false);

  const getHighlights = async () => {
    setLoading(true);
    try {
      const res = await TaskServices.getHighlightForCategories(date);
      setData({
        ...data,
        datasets: [
          {
            data: res,
            colors: BAR_COLORS,
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isFocused) {
      getHighlights();
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  const Chart: React.FC<ChartProps> = ({ title, chart }) => {
    return (
      <View style={styles.chartContainer}>
        <AppText
          color="white"
          style={styles.chartTitle}
          type="Muli_400Regular_Italic"
        >
          {title}
        </AppText>
        {chart}
      </View>
    );
  };

  return (
    <CustomSafeAreaView>
      <Header />
      <Chart
        title={`Category Distribution of Tasks in ${moment().format('MMMM')}`}
        chart={
          <BarChart
            data={
              typeof data.datasets[0].data[0] === 'string'
                ? {
                    ...data,
                    datasets: [
                      {
                        data: data.datasets[0].data.map((cat) => {
                          return (
                            moment(cat, 'HH:mm').toDate().getHours() +
                            moment(cat, 'HH:mm').toDate().getMinutes() / 100
                          );
                        }),
                        colors: BAR_COLORS,
                      },
                    ],
                  }
                : data
            }
            fromZero
            yAxisLabel=""
            yAxisSuffix="H"
            width={SCREEN_WIDTH * 0.9}
            height={SCREEN_HEIGHT * 0.3}
            flatColor
            withCustomBarColorFromData
            chartConfig={{
              fillShadowGradient: constants.gradient,
              fillShadowGradientOpacity: 1,

              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              strokeWidth: 2, // optional, default 3
              barPercentage: 0.5,
              useShadowColorFromDataset: false, // optional
            }}
          />
        }
      />
      <ScrollView style={styles.container}>
        <View style={styles.comparisonsContainer}>
          <CategoryComparison
            category="Sports"
            status="Up"
            amount={data.datasets[0].data[0]}
            backgroundColor={constants.mediumPriority}
            loading={loading}
          />
          <CategoryComparison
            category="Study"
            status="Up"
            amount={data.datasets[0].data[1]}
            backgroundColor={constants.icon[1]}
            loading={loading}
          />
          <CategoryComparison
            category="Leisure"
            status="Up"
            amount={data.datasets[0].data[2]}
            backgroundColor={constants.highPriority}
            loading={loading}
          />
          <CategoryComparison
            category="Other"
            status="Up"
            amount={data.datasets[0].data[3]}
            backgroundColor={constants.gradient}
            loading={loading}
          />
        </View>
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default Highlights;
