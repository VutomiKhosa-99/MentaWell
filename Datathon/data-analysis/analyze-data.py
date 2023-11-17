import pandas as pd

# Put Data In Our Dataframe
df = pd.read_excel('data.xlsx')

# test
print(df.head())

# Analyze data
total_count = len(df)
male_count = len(df[df['Gender'] == 'Male'])
female_count = len(df[df['Gender'] == 'Female'])

age_counts = df['Age'].value_counts().to_dict()

prev_depressed_count = len(df[df['Previously Depressed'] == 'Yes'])
currently_depressed_count = len(df[df['Currently Depressed'] == 'Yes'])
never_depressed_count = len(df[df['Never Experienced Depression'] == 'Yes'])

# Print analysis results
print(f"Total Count: {total_count}")
print(f"Male Count: {male_count}")
print(f"Female Count: {female_count}")

print("\nAge Distribution:")
for age, count in age_counts.items():
    print(f"{age}: {count}")

print(f"\nNumber of Previously Depressed: {prev_depressed_count}")
print(f"Number of Currently Depressed: {currently_depressed_count}")
print(f"Number Never Experienced Depression: {never_depressed_count}")

def get_analysis():
    analysis_results = {
        'total_count': total_count,
        'male_count': male_count,
        'female_count': female_count,
        'age_counts': age_counts,
        'prev_depressed_count': prev_depressed_count,
        'currently_depressed_count': currently_depressed_count,
        'never_depressed_count': never_depressed_count,
    }
    return jsonify(analysis_results)
