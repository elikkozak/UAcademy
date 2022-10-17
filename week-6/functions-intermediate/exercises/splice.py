# def splice(arr, start, deleteCount, *items):
#     deleted = []
#     if start >= len(arr):
#         arr.append(tuple((3, 4)))
#     elif deleteCount <= 0:
#         if len(items) > 0:
#             for item in items:
#                 arr.insert(start, item)
#     else:
#         deleted = arr[start:min(start+deleteCount, len(arr))]
#         temp_arr = arr[0:start]
#         if len(items) > 0:
#             i = 0
#             for item in items:
#                 arr.insert(start + i, item)
#                 i += 1
#         temp_arr += arr[start+min(deleteCount, len(arr)):] + arr[min(start+deleteCount, len(arr)):]
#         arr = temp_arr
#     return (arr, deleted)


# # remove 1 element
# nums = [1, 2, 3]
# nums, deleted = splice(nums, 0, 1)
# print(nums)
# assert nums == [2, 3]

# # add 1 element
# nums = [1, 2, 3]
# nums, deleted = splice(nums, 0, 0, 0)
# assert nums == [0, 1, 2, 3]

# # add 2 elements
# nums = [1, 2, 3]
# nums, deleted = splice(nums, 0, 0, -1, 0)
# assert nums == [-1, 0, 1, 2, 3]
