import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import AppText from '../AppText';
import { Feather } from '@expo/vector-icons';
import constants from '../../utils/constants';
import { normalize } from '../../utils/helpers/normalize';

const SCREEN_WIDTH = Dimensions.get('screen').width;

interface CategoryProps {
  category: 'Sports' | 'Study' | 'Leisure' | 'Other';
  status: 'Up' | 'Down';
  amount: number;
  backgroundColor: string;
  loading?: boolean;
}

const CategoryComparison: React.FC<CategoryProps> = ({
  category,
  status,
  amount,
  backgroundColor,
}) => {
  return (
    <View style={[styles.comparisonContainer, { backgroundColor }]}>
      <AppText type="Muli_600SemiBold" style={styles.categoryText}>
        {category}
      </AppText>
      <AppText style={styles.comparisonText}>
        {`You have spent ${amount} hours in this category during this month`}
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

const styles = StyleSheet.create({
  comparisonContainer: {
    paddingTop: normalize(40),
    paddingLeft: normalize(10),
    borderRadius: normalize(18),
    width: '48%',
    height: SCREEN_WIDTH / 2.2,
    marginBottom: normalize(15),
    backgroundColor: constants.highPriority,
  },
  categoryText: {
    color: '#fff',
    fontSize: normalize(20),
  },
  comparisonText: { color: '#fff' },
  categoryStatusIcon: {
    position: 'absolute',
    bottom: normalize(15),
    right: normalize(15),
  },
});

export default CategoryComparison;
