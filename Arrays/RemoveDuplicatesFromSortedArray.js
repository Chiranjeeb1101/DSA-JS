function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let k = 1; // Pointer to insert the next unique element

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}
