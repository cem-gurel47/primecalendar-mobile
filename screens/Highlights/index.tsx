import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/context';
import { View, ScrollView, Text } from 'react-native';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import AppText from '../../components/AppText';
import Header from '../../components/Headers/HighlightsHeader';
import { ProgressChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import styles from './styles';
import constants from '../../utils/constants';
import CategoryComparison from '../../components/CategoryComparison';
import TaskServices from '../../api/task';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

interface ChartProps {
  title: string;
  chart: React.ReactNode;
}

const Highlights = () => {
  const isFocused = useIsFocused();
  //@ts-ignore
  const { user } = useContext(AuthContext);
  const date = moment().format('DD-MM-YYYY');
  const [data, setData] = useState({
    labels: ['Sports', 'Study', 'Leisure', 'Other'], // optional
    data: [0, 0, 0, 0],
  });
  const [loading, setLoading] = useState(false);
  // each value represents a goal ring in Progress chart
  // const data = {
  //   data: [0.4, 0.6, 0.8, 0.52],
  // };

  const getHighlights = async () => {
    setLoading(true);
    try {
      const res = await TaskServices.getHighlightForCategories(user.uid, date);
      setData({ ...data, data: res });
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
        <AppText color="white" style={styles.chartTitle}>
          {title}
        </AppText>
        {chart}
      </View>
    );
  };

  return (
    <CustomSafeAreaView>
      <Header />
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={getHighlights}>
          <Text>Press</Text>
        </TouchableOpacity>
        <Chart
          title="Category Distribution of Tasks"
          chart={
            <ProgressChart
              data={
                typeof data.data[0] === 'string'
                  ? {
                      ...data,
                      data: data.data.map((cat) => {
                        return (
                          moment(cat, 'HH:mm').toDate().getMinutes() / 1000
                        );
                      }),
                    }
                  : data
              }
              width={SCREEN_WIDTH * 0.9}
              height={SCREEN_HEIGHT * 0.3}
              strokeWidth={16}
              radius={32}
              chartConfig={{
                color: (opacity = 1) => `rgba(123, 255, 255, ${opacity})`,
                strokeWidth: 2, // optional, default 3
                barPercentage: 0.5,
                useShadowColorFromDataset: false, // optional
              }}
              hideLegend={false}
            />
          }
        />
        <View style={styles.comparisonsContainer}>
          <CategoryComparison
            category="Sports"
            status="Down"
            amount={data.data[0]}
            backgroundColor={constants.mediumPriority}
            loading={loading}
          />
          <CategoryComparison
            category="Study"
            status="Down"
            amount={data.data[1]}
            backgroundColor={constants.icon[1]}
            loading={loading}
          />
          <CategoryComparison
            category="Leisure"
            status="Up"
            amount={data.data[2]}
            backgroundColor={constants.highPriority}
            loading={loading}
          />
          <CategoryComparison
            category="Other"
            status="Up"
            amount={data.data[3]}
            backgroundColor={constants.gradient}
            loading={loading}
          />
        </View>
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default Highlights;
