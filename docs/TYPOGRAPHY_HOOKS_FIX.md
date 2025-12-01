# Typography System - React Hooks Error Fix

**Date:** October 18, 2025
**Status:** ✅ FIXED
**Error Type:** React Hooks Order Violation

---

## 🐛 The Error

```
React has detected a change in the order of Hooks called by FontSwitcher.

   Previous render            Next render
   ------------------------------------------------------
1. useContext                 useContext
2. useState                   useState
3. useState                   useState
4. undefined                  useMemo    ← Hook order changed!
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
```

---

## 🔍 Root Cause

The component had an **early return BEFORE all hooks were called**:

```tsx
// ❌ BROKEN CODE
export const FontSwitcher = () => {
  const { currentPair, setPair, scale, setScale, isLoaded } = useFonts();
  const [isOpen, setIsOpen] = useState(false);
  const [activePreset, setActivePreset] = useState<PresetKey>("all");

  // ❌ EARLY RETURN BEFORE HOOKS!
  if (!isLoaded) return null;

  // These hooks are NOT called when isLoaded is false:
  const filteredFonts = useMemo(() => { ... }, [activePreset, fontPairs]);

  useEffect(() => { ... }, [isOpen]);
```

**What happened:**
1. **First render** (`isLoaded = false`):
   - `useContext` called
   - `useState` called (twice)
   - Early return → `useMemo` and `useEffect` NOT called

2. **Second render** (`isLoaded = true`):
   - `useContext` called
   - `useState` called (twice)
   - No early return → `useMemo` and `useEffect` NOW called
   - **Hook order changed!** 🚨

---

## ✅ The Fix

**Move early return AFTER all hooks:**

```tsx
// ✅ FIXED CODE
export const FontSwitcher = () => {
  const { currentPair, setPair, scale, setScale, isLoaded } = useFonts();
  const [isOpen, setIsOpen] = useState(false);
  const [activePreset, setActivePreset] = useState<PresetKey>("all");

  // ✅ All hooks called BEFORE any conditional logic
  const fontPairs = Object.values(FONT_PAIRS);

  const filteredFonts = useMemo(() => {
    if (activePreset === "all") return fontPairs;
    // ... filtering logic
  }, [activePreset, fontPairs]);

  const handleReset = () => {
    setPair(DEFAULT_FONT_PAIR);
    setScale(100);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // ✅ NOW return early AFTER all hooks
  if (!isLoaded) return null;

  return (
    // ... JSX
  );
};
```

---

## 📚 Rules of Hooks

**The two fundamental rules:**

### Rule #1: Only Call Hooks at the Top Level
✅ **DO:** Call hooks at the top level of your component
❌ **DON'T:** Call hooks inside conditions, loops, or nested functions

```tsx
// ❌ WRONG
if (condition) {
  const [state, setState] = useState(0);
}

// ✅ RIGHT
const [state, setState] = useState(0);
if (condition) {
  // use state here
}
```

### Rule #2: Only Call Hooks from React Functions
✅ Call hooks from React function components
✅ Call hooks from custom hooks
❌ Don't call hooks from regular JavaScript functions

---

## 🧪 Verification

**TypeScript Check:**
```bash
npm run ts:check
# ✅ PASS - Zero errors
```

**Runtime:**
- ✅ No more "Rendered more hooks than during the previous render" error
- ✅ No more "change in the order of Hooks" warning
- ✅ Component renders correctly
- ✅ All functionality works

---

## 📖 Key Takeaway

**Always call ALL hooks before ANY conditional returns:**

```tsx
// ✅ CORRECT PATTERN
const MyComponent = () => {
  // 1. Call ALL hooks first
  const value1 = useContext(MyContext);
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState("");
  const memoized = useMemo(() => { ... }, [deps]);

  useEffect(() => { ... }, [deps]);

  // 2. THEN do conditional logic
  if (!value1) return null;
  if (someCondition) return <Loading />;

  // 3. Finally return JSX
  return <div>...</div>;
};
```

---

## ✅ Status

**Error:** FIXED ✅
**TypeScript:** PASS ✅
**Runtime:** NO ERRORS ✅

The FontSwitcher component now follows React's Rules of Hooks correctly and works without errors!
