import React from 'react';
import { View, ScrollView } from 'react-native';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import AppText from '../../components/AppText';
import Header from '../../components/Headers/index';
import { ProgressChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import constants from '../../utils/constants';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

interface ChartProps {
  title: string;
  chart: React.ReactNode;
}

interface CategoryProps {
  category: 'Sports' | 'Study' | 'Leisure' | 'Other';
  status: 'Up' | 'Down';
  amount: number;
  backgroundColor: string;
}

const AnalysisAndReviews = () => {
  // each value represents a goal ring in Progress chart
  const data = {
    labels: ['Sports', 'Study', 'Leisure', 'Other'], // optional
    data: [0.4, 0.6, 0.8, 0.52],
  };

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

  const CategoryComparison: React.FC<CategoryProps> = ({
    category,
    status,
    amount,
    backgroundColor,
  }) => {
    return (
      <View style={[styles.comparisonContainer, { backgroundColor }]}>
        <AppText
          type="Muli_600SemiBold"
          color="white"
          style={styles.categoryText}
        >
          {category}
        </AppText>
        <AppText color="white">
          {`${status} ${amount}% compared to last month`}
        </AppText>
        <Feather
          name={status === 'Down' ? 'arrow-down-circle' : 'arrow-up-circle'}
          size={24}
          color={constants.white}
          style={styles.categoryStatusIcon}
        />
      </View>
    );
  };

  return (
    <CustomSafeAreaView>
      <Header title="Analysis & Reviews" />
      <ScrollView style={styles.container}>
        <Chart
          title="Category Distribution of Tasks"
          chart={
            <ProgressChart
              data={data}
              width={SCREEN_WIDTH * 0.9}
              height={SCREEN_HEIGHT * 0.3}
              strokeWidth={16}
              radius={32}
              chartConfig={{
                color: (opacity = 1) => `rgba(61, 112, 248, ${opacity})`,
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
            category="Leisure"
            status="Up"
            amount={12}
            backgroundColor={constants.highPriority}
          />
          <CategoryComparison
            category="Sports"
            status="Down"
            amount={31}
            backgroundColor={constants.mediumPriority}
          />
          <CategoryComparison
            category="Sports"
            status="Down"
            amount={43}
            backgroundColor={constants.icon[1]}
          />
          <CategoryComparison
            category="Other"
            status="Up"
            amount={78}
            backgroundColor={constants.gradient}
          />
        </View>
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default AnalysisAndReviews;
