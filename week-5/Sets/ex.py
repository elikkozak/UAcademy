import json
  
# Opening JSON file
f = open('C:\\Users\\Rent\\Desktop\\UAcademy\\week-5\\Sets\\exercises\\nyc_jobs.json')
  
# returns JSON object as 
# a dictionary
jobs = json.load(f)

# Search in Description

def find_jobs_by_word(word):
    return [job for job in jobs if word in job.get("job_description")]
    
print(len(find_jobs_by_word("experience"))) # 165

# Junior Jobs in Brooklin

entry_level_jobs = set([job["agency"] for job in jobs if job["career_level"] == "Entry-Level"])
jobs_in_broadway = set([job["agency"] for job in jobs if "Broadway" in job["work_location"]])

results = entry_level_jobs.intersection(jobs_in_broadway)
print(results)

# Max Hourly Salary

not_entry_level_jobs = set([job["agency"] for job in jobs if job["career_level"] != "Entry-Level"])
max_hourly_job_not_entry_level = [job["salary_range_to"] for job in jobs if job["salary_frequency"] == "Hourly"]
print(max(max_hourly_job_not_entry_level))

# Salaries in Range

def salaries_in_range(lower_range,heigher_range):
    return set([job["agency"] for job in jobs if float(job["salary_range_from"]) >= lower_range and float(job["salary_range_to"]) <= heigher_range])
print(salaries_in_range(17,21))